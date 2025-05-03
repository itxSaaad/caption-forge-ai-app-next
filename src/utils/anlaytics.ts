import { sendGAEvent } from '@next/third-parties/google';

export function trackGAEvent({
  eventName,
  eventCategory,
  eventLabel,
  eventValue,
  ...rest
}: {
  eventName: string;
  eventCategory: string;
  eventLabel: string;
  eventValue?: number;
  [key: string]: string | number | boolean | null | undefined;
}) {
  sendGAEvent({
    event: eventName,
    event_category: eventCategory,
    event_label: eventLabel,
    value: eventValue,
    ...rest,
  });
}
