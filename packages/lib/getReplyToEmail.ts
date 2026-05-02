import type { CalendarEvent } from "@calcom/types/Calendar";

/**
 * Returns the reply-to email address to use.
 * Modified: returns null by default (instead of organizer's email) to prevent
 * FREEMAIL_FORGED_REPLYTO spam penalty when organizers use Gmail addresses.
 * The Reply-To will fall back to the From address automatically.
 */
export const getReplyToEmail = (
  calEvent: Pick<CalendarEvent, "customReplyToEmail" | "organizer">,
  excludeOrganizerEmail?: boolean
) => {
  if (calEvent.customReplyToEmail) {
    return calEvent.customReplyToEmail;
  }
  return null;
};
