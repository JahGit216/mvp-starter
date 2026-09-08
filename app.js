const SUPABASE_URL = "https://yzzlvfcsodrgjgposhfo.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_aLWOdDoiw0pAa46TRYYxrw_Vm7awHWv";

const eligibilityDialog = document.querySelector("#eligibility-dialog");
const responseDialog = document.querySelector("#response-dialog");
const trackingStatus = document.querySelector("#tracking-status");

const eligibilityDecisionKey = "rentguard-eligibility-decision";
const eligibleCountedKey = "rentguard-eligible-view-counted";
const ctaCountedKey = "rentguard-cta-click-counted";

async function recordEvent(eventType) {
  try {
    const response = await fetch(`${SUPABASE_URL}/rest/v1/experiment_events`, {
      method: "POST",
      headers: {
        apikey: SUPABASE_PUBLISHABLE_KEY,
        "Content-Type": "application/json",
        Prefer: "return=minimal"
      },
      body: JSON.stringify({ event_type: eventType })
    });

    if (!response.ok) {
      throw new Error(`Supabase returned ${response.status}`);
    }

    return true;
  } catch (error) {
    console.error("RentGuard experiment event was not recorded:", error);
    return false;
  }
}

async function countEligibleViewOnce() {
  if (sessionStorage.getItem(eligibleCountedKey) === "true") return;

  const recorded = await recordEvent("eligible_view");
  if (recorded) {
    sessionStorage.setItem(eligibleCountedKey, "true");
    if (trackingStatus) trackingStatus.textContent = "Eligible visit recorded anonymously for this browser session.";
  } else if (trackingStatus) {
    trackingStatus.textContent = "Tracking is temporarily unavailable; no personal data was collected.";
  }
}

async function countCtaClickOnce() {
  if (sessionStorage.getItem(ctaCountedKey) === "true") return;

  const recorded = await recordEvent("cta_click");
  if (recorded) {
    sessionStorage.setItem(ctaCountedKey, "true");
  }
}

async function setEligibility(isEligible) {
  sessionStorage.setItem(eligibilityDecisionKey, isEligible ? "eligible" : "not-eligible");
  eligibilityDialog.close();

  if (isEligible) {
    await countEligibleViewOnce();
  } else if (trackingStatus) {
    trackingStatus.textContent = "This visit is excluded from the experiment denominator.";
  }
}

document.querySelector("#eligible-yes")?.addEventListener("click", () => setEligibility(true));
document.querySelector("#eligible-no")?.addEventListener("click", () => setEligibility(false));

for (const button of document.querySelectorAll("[data-event]")) {
  button.addEventListener("click", async () => {
    const eligibility = sessionStorage.getItem(eligibilityDecisionKey);

    if (!eligibility) {
      eligibilityDialog.showModal();
      return;
    }

    if (eligibility === "eligible") {
      await countEligibleViewOnce();
      await countCtaClickOnce();
    }

    responseDialog.showModal();
  });
}

for (const button of document.querySelectorAll("[data-close]")) {
  button.addEventListener("click", () => responseDialog.close());
}

const savedEligibility = sessionStorage.getItem(eligibilityDecisionKey);
if (!savedEligibility) {
  eligibilityDialog.showModal();
} else if (savedEligibility === "eligible") {
  countEligibleViewOnce();
} else if (trackingStatus) {
  trackingStatus.textContent = "This visit is excluded from the experiment denominator.";
}
