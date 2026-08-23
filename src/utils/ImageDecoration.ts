import { userImages } from '../data/images';

export interface DecorationInfo {
  key: keyof typeof userImages.decorations;
  src: string;
  alt: string;
}

const decorationMeta: Record<keyof typeof userImages.decorations, string> = {
  soulLeavingBody: 'Soul leaving body',
  cyberKatana: 'Cyber katana',
  candlelightDark: 'Candlelight in the dark',
  shy: 'Shy',
  blossomBurst: 'Blossom burst',
};

/**
 * Decoration rotates by weekday — Sunday through Saturday — unless
 * VITE_DECORATION_IMAGE pins one explicitly.
 */
const weekdayDecorations: (keyof typeof userImages.decorations)[] = [
  'soulLeavingBody', // Sunday
  'cyberKatana', // Monday
  'candlelightDark', // Tuesday
  'cyberKatana', // Wednesday
  'candlelightDark', // Thursday
  'shy', // Friday
  'blossomBurst', // Saturday
];

export const getDailyDecoration = (date: Date = new Date()): DecorationInfo => {
  const override = import.meta.env.VITE_DECORATION_IMAGE;
  const key =
    override && override in userImages.decorations
      ? (override as keyof typeof userImages.decorations)
      : weekdayDecorations[date.getDay()];

  return {
    key,
    src: userImages.decorations[key],
    alt: decorationMeta[key],
  };
};
