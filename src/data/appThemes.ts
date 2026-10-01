export interface AmbientGlowConfig {
  color: string;
  position: string;
  opacity: number;
  blur: string;
}

export interface AppTheme {
  id: string;
  name: string;
  label?: string;
  subtitle?: string;
  badge?: string;
  accentHex: string;
  secondaryHex?: string;
  tertiaryHex?: string;
  cardHex: string;
  bgHex: string;
  borderHex: string;
  badgeHex?: string;
  accentText?: string;
  category?: string;
  isCustom?: boolean;
  fontFamily?: string;
  fontName?: string;
  stripes?: [string, string, string];
  ambientGlows?: AmbientGlowConfig[];
}

export const APP_THEMES: AppTheme[] = [
  {
    id: 'spurs_stealth',
    name: 'Silver & Black Heritage',
    label: 'Silver & Black',
    subtitle: 'Classic White & Silver Heritage on Obsidian Black',
    badge: 'SILVER & BLACK',
    accentHex: '#FFFFFF',
    secondaryHex: '#D1D5DB',
    tertiaryHex: '#71717A',
    cardHex: '#080808',
    bgHex: '#000000',
    borderHex: '#FFFFFF60',
    badgeHex: '#FFFFFF',
    accentText: 'text-white',
    category: 'Sanctuary Heritage',
    fontFamily: "'Outfit', sans-serif",
    fontName: 'Athletic Modern',
    stripes: ['#FFFFFF', '#C0C0C0', '#71717A'],
    ambientGlows: [
      { color: '#FFFFFF', position: 'top-[16%] -left-20 w-[380px] h-[480px]', opacity: 0.20, blur: 'blur-[110px]' },
      { color: '#D1D5DB', position: 'top-[34%] -right-16 w-[340px] h-[420px]', opacity: 0.16, blur: 'blur-[100px]' },
      { color: '#94A3B8', position: 'bottom-[15%] left-[15%] w-[380px] h-[360px]', opacity: 0.12, blur: 'blur-[90px]' }
    ]
  },
  {
    id: 'fiesta_vibes',
    name: 'River City Fiesta',
    label: 'River City Fiesta',
    subtitle: 'Iconic South Texas Fiesta Teal, Hot Pink & Radiant Orange',
    badge: 'FIESTA',
    accentHex: '#00B2A9',        // Fiesta Teal
    secondaryHex: '#EF426F',     // Fiesta Pink
    tertiaryHex: '#FF8200',      // Fiesta Orange
    cardHex: '#040d12',
    bgHex: '#000000',
    borderHex: '#00B2A970',
    badgeHex: '#00B2A9',
    accentText: 'text-[#00B2A9]',
    category: 'City Celebration',
    fontFamily: "'Outfit', sans-serif",
    fontName: 'Fiesta Dynamic',
    stripes: ['#00B2A9', '#EF426F', '#FF8200'],
    ambientGlows: [
      { color: '#00B2A9', position: 'top-[16%] -left-24 w-[420px] h-[520px]', opacity: 0.38, blur: 'blur-[100px]' },
      { color: '#EF426F', position: 'top-[32%] -right-20 w-[360px] h-[460px]', opacity: 0.30, blur: 'blur-[100px]' },
      { color: '#FF8200', position: 'bottom-[12%] left-[10%] w-[400px] h-[380px]', opacity: 0.25, blur: 'blur-[90px]' }
    ]
  },
  {
    id: 'lakers_noir',
    name: 'Lakers Showtime Gold & Purple Noir',
    label: 'Lakers Showtime',
    subtitle: 'Obsidian Black with Forum Purple & California Gold splashes',
    badge: 'PURPLE & GOLD',
    accentHex: '#FDB927',
    secondaryHex: '#552583',
    tertiaryHex: '#FFFFFF',
    cardHex: '#0b0412',
    bgHex: '#000000',
    borderHex: '#FDB92770',
    badgeHex: '#FDB927',
    accentText: 'text-amber-300',
    category: 'NBA Team Splashes',
    fontFamily: "'Outfit', sans-serif",
    fontName: 'Showtime Dynasty',
    stripes: ['#552583', '#FDB927', '#FFFFFF'],
    ambientGlows: [
      { color: '#552583', position: 'top-[16%] -left-24 w-[420px] h-[520px]', opacity: 0.42, blur: 'blur-[110px]' },
      { color: '#FDB927', position: 'top-[32%] -right-20 w-[380px] h-[460px]', opacity: 0.36, blur: 'blur-[105px]' },
      { color: '#9333EA', position: 'bottom-[12%] left-[10%] w-[400px] h-[380px]', opacity: 0.28, blur: 'blur-[95px]' }
    ]
  },
  {
    id: 'warriors_splash',
    name: 'Golden State Royal & Championship Gold',
    label: 'Warriors Splash',
    subtitle: 'Obsidian Black with Royal Bay Blue & Championship Gold splashes',
    badge: 'ROYAL & GOLD',
    accentHex: '#FFC72C',
    secondaryHex: '#1D428A',
    tertiaryHex: '#006BB6',
    cardHex: '#030a17',
    bgHex: '#000000',
    borderHex: '#FFC72C70',
    badgeHex: '#FFC72C',
    accentText: 'text-yellow-400',
    category: 'NBA Team Splashes',
    fontFamily: "'Outfit', sans-serif",
    fontName: 'Bay Dynasty',
    stripes: ['#1D428A', '#FFC72C', '#006BB6'],
    ambientGlows: [
      { color: '#1D428A', position: 'top-[16%] -left-24 w-[420px] h-[520px]', opacity: 0.44, blur: 'blur-[110px]' },
      { color: '#FFC72C', position: 'top-[32%] -right-20 w-[380px] h-[460px]', opacity: 0.36, blur: 'blur-[105px]' },
      { color: '#38BDF8', position: 'bottom-[12%] left-[10%] w-[400px] h-[380px]', opacity: 0.26, blur: 'blur-[95px]' }
    ]
  },
  {
    id: 'bulls_blaze',
    name: 'Chicago Bulls Crimson & Obsidian',
    label: 'Bulls Crimson',
    subtitle: 'Obsidian Black with Bulls Scarlet Red & Silver Smoke splashes',
    badge: 'BULLS CRIMSON',
    accentHex: '#CE1141',
    secondaryHex: '#FFFFFF',
    tertiaryHex: '#71717A',
    cardHex: '#120205',
    bgHex: '#000000',
    borderHex: '#CE114170',
    badgeHex: '#CE1141',
    accentText: 'text-red-500',
    category: 'NBA Team Splashes',
    fontFamily: "'Barlow Condensed', sans-serif",
    fontName: 'Windy City Bold',
    stripes: ['#CE1141', '#FFFFFF', '#18181B'],
    ambientGlows: [
      { color: '#CE1141', position: 'top-[16%] -left-24 w-[420px] h-[520px]', opacity: 0.42, blur: 'blur-[110px]' },
      { color: '#E11D48', position: 'top-[32%] -right-20 w-[380px] h-[460px]', opacity: 0.34, blur: 'blur-[105px]' },
      { color: '#FFFFFF', position: 'bottom-[12%] left-[10%] w-[380px] h-[360px]', opacity: 0.16, blur: 'blur-[90px]' }
    ]
  },
  {
    id: 'miami_vice',
    name: 'Miami Vice Cyber Glow',
    label: 'Miami Vice',
    subtitle: 'Obsidian Black with Neon Laser Pink & Miami Ocean Cyan splashes',
    badge: 'VICE CYBER',
    accentHex: '#00F0FF',
    secondaryHex: '#FF1493',
    tertiaryHex: '#FFD700',
    cardHex: '#070210',
    bgHex: '#000000',
    borderHex: '#00F0FF70',
    badgeHex: '#00F0FF',
    accentText: 'text-cyan-300',
    category: 'NBA Team Splashes',
    fontFamily: "'Outfit', sans-serif",
    fontName: 'Vice Electric',
    stripes: ['#00F0FF', '#FF1493', '#FFD700'],
    ambientGlows: [
      { color: '#00F0FF', position: 'top-[16%] -left-24 w-[420px] h-[520px]', opacity: 0.44, blur: 'blur-[110px]' },
      { color: '#FF1493', position: 'top-[32%] -right-20 w-[380px] h-[460px]', opacity: 0.40, blur: 'blur-[105px]' },
      { color: '#8B5CF6', position: 'bottom-[12%] left-[10%] w-[400px] h-[380px]', opacity: 0.28, blur: 'blur-[95px]' }
    ]
  },
  {
    id: 'celtics_shamrock',
    name: 'Boston Celtics Clover & Parquet Gold',
    label: 'Celtics Emerald',
    subtitle: 'Obsidian Black with Boston Clover Green & Championship Gold splashes',
    badge: 'CELTIC EMERALD',
    accentHex: '#007A33',
    secondaryHex: '#BA9653',
    tertiaryHex: '#4ADE80',
    cardHex: '#021008',
    bgHex: '#000000',
    borderHex: '#007A3370',
    badgeHex: '#007A33',
    accentText: 'text-emerald-400',
    category: 'NBA Team Splashes',
    fontFamily: "'Outfit', sans-serif",
    fontName: 'Banner Dynasty',
    stripes: ['#007A33', '#BA9653', '#FFFFFF'],
    ambientGlows: [
      { color: '#007A33', position: 'top-[16%] -left-24 w-[420px] h-[520px]', opacity: 0.42, blur: 'blur-[110px]' },
      { color: '#BA9653', position: 'top-[32%] -right-20 w-[380px] h-[460px]', opacity: 0.34, blur: 'blur-[105px]' },
      { color: '#22C55E', position: 'bottom-[12%] left-[10%] w-[400px] h-[380px]', opacity: 0.28, blur: 'blur-[95px]' }
    ]
  },
  {
    id: 'mavs_lonestar',
    name: 'Dallas Lone Star Deep Navy & Royal',
    label: 'Lone Star Royal',
    subtitle: 'Obsidian Black with Royal Blue, Deep Texas Navy & Icy Silver splashes',
    badge: 'LONE STAR ROYAL',
    accentHex: '#00538C',
    secondaryHex: '#002B5E',
    tertiaryHex: '#38BDF8',
    cardHex: '#020914',
    bgHex: '#000000',
    borderHex: '#00538C70',
    badgeHex: '#00538C',
    accentText: 'text-blue-400',
    category: 'NBA Team Splashes',
    fontFamily: "'Outfit', sans-serif",
    fontName: 'Texas Royal',
    stripes: ['#00538C', '#002B5E', '#38BDF8'],
    ambientGlows: [
      { color: '#00538C', position: 'top-[16%] -left-24 w-[420px] h-[520px]', opacity: 0.44, blur: 'blur-[110px]' },
      { color: '#0284C7', position: 'top-[32%] -right-20 w-[380px] h-[460px]', opacity: 0.36, blur: 'blur-[105px]' },
      { color: '#002B5E', position: 'bottom-[12%] left-[10%] w-[400px] h-[380px]', opacity: 0.32, blur: 'blur-[95px]' }
    ]
  },
  {
    id: 'suns_valley',
    name: 'Phoenix Valley Solar Ember',
    label: 'Valley Solar Ember',
    subtitle: 'Obsidian Black with Solar Orange & Deep Valley Purple splashes',
    badge: 'VALLEY EMBER',
    accentHex: '#E56020',
    secondaryHex: '#1D1160',
    tertiaryHex: '#F59E0B',
    cardHex: '#12050e',
    bgHex: '#000000',
    borderHex: '#E5602070',
    badgeHex: '#E56020',
    accentText: 'text-orange-400',
    category: 'NBA Team Splashes',
    fontFamily: "'Outfit', sans-serif",
    fontName: 'Desert Solar',
    stripes: ['#E56020', '#1D1160', '#F59E0B'],
    ambientGlows: [
      { color: '#E56020', position: 'top-[16%] -left-24 w-[420px] h-[520px]', opacity: 0.42, blur: 'blur-[110px]' },
      { color: '#7C3AED', position: 'top-[32%] -right-20 w-[380px] h-[460px]', opacity: 0.36, blur: 'blur-[105px]' },
      { color: '#F59E0B', position: 'bottom-[12%] left-[10%] w-[400px] h-[380px]', opacity: 0.30, blur: 'blur-[95px]' }
    ]
  },
  {
    id: 'pitch_black_pure',
    name: 'Pitch Black Monolith (No Map)',
    label: 'Pitch Black Stealth',
    subtitle: 'Pure 100% OLED Obsidian Black with subtle smoky silver vapor',
    badge: 'PITCH BLACK',
    accentHex: '#E2E8F0',
    secondaryHex: '#64748B',
    tertiaryHex: '#334155',
    cardHex: '#050505',
    bgHex: '#000000',
    borderHex: '#FFFFFF40',
    badgeHex: '#E2E8F0',
    accentText: 'text-slate-100',
    category: 'Stealth Black',
    fontFamily: "'Outfit', sans-serif",
    fontName: 'OLED Monolith',
    stripes: ['#FFFFFF', '#475569', '#000000'],
    ambientGlows: [
      { color: '#FFFFFF', position: 'top-[16%] -left-20 w-[380px] h-[460px]', opacity: 0.12, blur: 'blur-[120px]' },
      { color: '#94A3B8', position: 'top-[34%] -right-16 w-[340px] h-[400px]', opacity: 0.10, blur: 'blur-[110px]' },
      { color: '#475569', position: 'bottom-[15%] left-[15%] w-[360px] h-[340px]', opacity: 0.08, blur: 'blur-[100px]' }
    ]
  },
  {
    id: 'youngfire_gold',
    name: 'Sacred Flame Gold',
    label: 'Sacred Gold',
    subtitle: 'Golden liturgical warmth and sacred altar radiance',
    badge: 'SACRED GOLD',
    accentHex: '#F59E0B',
    secondaryHex: '#EA580C',
    tertiaryHex: '#EAB308',
    cardHex: '#0D0803',
    bgHex: '#000000',
    borderHex: '#F59E0B70',
    badgeHex: '#F59E0B',
    accentText: 'text-amber-400',
    category: 'Sanctuary Liturgical',
    fontFamily: "'Cinzel', serif",
    fontName: 'Imperial Sacred',
    stripes: ['#F59E0B', '#EA580C', '#EAB308'],
    ambientGlows: [
      { color: '#F59E0B', position: 'top-[16%] -left-20 w-[400px] h-[500px]', opacity: 0.32, blur: 'blur-[100px]' },
      { color: '#EA580C', position: 'top-[34%] -right-16 w-[360px] h-[440px]', opacity: 0.28, blur: 'blur-[100px]' },
      { color: '#EAB308', position: 'bottom-[14%] left-[15%] w-[380px] h-[360px]', opacity: 0.20, blur: 'blur-[90px]' }
    ]
  },
  {
    id: 'pentecost_flame',
    name: 'Pentecostal Crimson Blaze',
    label: 'Crimson Blaze',
    subtitle: 'Holy Fire consecration and passionate revival glow',
    badge: 'CRIMSON BLAZE',
    accentHex: '#EF4444',
    secondaryHex: '#F43F5E',
    tertiaryHex: '#FB923C',
    cardHex: '#120404',
    bgHex: '#000000',
    borderHex: '#EF444470',
    badgeHex: '#EF4444',
    accentText: 'text-red-400',
    category: 'Holy Fire',
    fontFamily: "'Barlow Condensed', sans-serif",
    fontName: 'Revival Bold',
    stripes: ['#EF4444', '#F43F5E', '#FB923C'],
    ambientGlows: [
      { color: '#EF4444', position: 'top-[16%] -left-20 w-[400px] h-[500px]', opacity: 0.32, blur: 'blur-[100px]' },
      { color: '#F43F5E', position: 'top-[34%] -right-16 w-[360px] h-[440px]', opacity: 0.28, blur: 'blur-[100px]' },
      { color: '#FB923C', position: 'bottom-[14%] left-[15%] w-[380px] h-[360px]', opacity: 0.22, blur: 'blur-[90px]' }
    ]
  },
  {
    id: 'shekinah_purple',
    name: 'Royal Shekinah Majesty',
    label: 'Royal Purple',
    subtitle: 'Deep royal purple and kingdom priesthood majesty',
    badge: 'ROYAL MAJESTY',
    accentHex: '#A855F7',
    secondaryHex: '#EC4899',
    tertiaryHex: '#6366F1',
    cardHex: '#0B0414',
    bgHex: '#000000',
    borderHex: '#A855F770',
    badgeHex: '#A855F7',
    accentText: 'text-purple-400',
    category: 'Kingdom Royalty',
    fontFamily: "'Cinzel', serif",
    fontName: 'Royal Priesthood',
    stripes: ['#A855F7', '#EC4899', '#6366F1'],
    ambientGlows: [
      { color: '#A855F7', position: 'top-[16%] -left-20 w-[400px] h-[500px]', opacity: 0.32, blur: 'blur-[100px]' },
      { color: '#EC4899', position: 'top-[34%] -right-16 w-[360px] h-[440px]', opacity: 0.28, blur: 'blur-[100px]' },
      { color: '#6366F1', position: 'bottom-[14%] left-[15%] w-[380px] h-[360px]', opacity: 0.22, blur: 'blur-[90px]' }
    ]
  },
  {
    id: 'living_water',
    name: 'Living Water & Olive Branch',
    label: 'Living Water',
    subtitle: 'Fresh emerald oasis, mint grace, and living fountain streams',
    badge: 'LIVING WATER',
    accentHex: '#10B981',
    secondaryHex: '#34D399',
    tertiaryHex: '#0D9488',
    cardHex: '#03140E',
    bgHex: '#000000',
    borderHex: '#10B98170',
    badgeHex: '#10B981',
    accentText: 'text-emerald-400',
    category: 'Fresh Anointing',
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontName: 'Serene Oasis',
    stripes: ['#10B981', '#34D399', '#0D9488'],
    ambientGlows: [
      { color: '#10B981', position: 'top-[16%] -left-20 w-[400px] h-[500px]', opacity: 0.34, blur: 'blur-[100px]' },
      { color: '#34D399', position: 'top-[34%] -right-16 w-[360px] h-[440px]', opacity: 0.26, blur: 'blur-[100px]' },
      { color: '#0D9488', position: 'bottom-[14%] left-[15%] w-[380px] h-[360px]', opacity: 0.22, blur: 'blur-[90px]' }
    ]
  },
  {
    id: 'midnight_celestial',
    name: 'Midnight Celestial Sanctuary',
    label: 'Midnight Celestial',
    subtitle: 'Deep starlit prayer watch with electric cyan and sky blue',
    badge: 'MIDNIGHT CELESTIAL',
    accentHex: '#06B6D4',
    secondaryHex: '#38BDF8',
    tertiaryHex: '#4F46E5',
    cardHex: '#031018',
    bgHex: '#000000',
    borderHex: '#06B6D470',
    badgeHex: '#06B6D4',
    accentText: 'text-cyan-400',
    category: 'Night Watch',
    fontFamily: "'Space Grotesk', sans-serif",
    fontName: 'Celestial Watch',
    stripes: ['#06B6D4', '#38BDF8', '#4F46E5'],
    ambientGlows: [
      { color: '#06B6D4', position: 'top-[16%] -left-20 w-[400px] h-[500px]', opacity: 0.34, blur: 'blur-[100px]' },
      { color: '#38BDF8', position: 'top-[34%] -right-16 w-[360px] h-[440px]', opacity: 0.28, blur: 'blur-[100px]' },
      { color: '#4F46E5', position: 'bottom-[14%] left-[15%] w-[380px] h-[360px]', opacity: 0.22, blur: 'blur-[90px]' }
    ]
  },
  {
    id: 'harvest_bronze',
    name: 'Copper Altar & Harvest Bronze',
    label: 'Harvest Bronze',
    subtitle: 'Tabernacle copper, harvest grain, and warm autumn bronze',
    badge: 'HARVEST BRONZE',
    accentHex: '#D97706',
    secondaryHex: '#B45309',
    tertiaryHex: '#EA580C',
    cardHex: '#140A03',
    bgHex: '#000000',
    borderHex: '#D9770670',
    badgeHex: '#D97706',
    accentText: 'text-amber-500',
    category: 'Altar Worship',
    fontFamily: "'Barlow Condensed', sans-serif",
    fontName: 'Autumn Bronze',
    stripes: ['#D97706', '#B45309', '#EA580C'],
    ambientGlows: [
      { color: '#D97706', position: 'top-[16%] -left-20 w-[400px] h-[500px]', opacity: 0.32, blur: 'blur-[100px]' },
      { color: '#B45309', position: 'top-[34%] -right-16 w-[360px] h-[440px]', opacity: 0.26, blur: 'blur-[100px]' },
      { color: '#EA580C', position: 'bottom-[14%] left-[15%] w-[380px] h-[360px]', opacity: 0.22, blur: 'blur-[90px]' }
    ]
  },
  {
    id: 'glory_sunset',
    name: 'Glory Cloud Sunset',
    label: 'Glory Sunset',
    subtitle: 'Evening sacrifice coral, sunrise amber, and twilight lavender',
    badge: 'GLORY SUNSET',
    accentHex: '#F43F5E',
    secondaryHex: '#F59E0B',
    tertiaryHex: '#8B5CF6',
    cardHex: '#14050D',
    bgHex: '#000000',
    borderHex: '#F43F5E70',
    badgeHex: '#F43F5E',
    accentText: 'text-rose-400',
    category: 'Evening Glory',
    fontFamily: "'Outfit', sans-serif",
    fontName: 'Sunset Glow',
    stripes: ['#F43F5E', '#F59E0B', '#8B5CF6'],
    ambientGlows: [
      { color: '#F43F5E', position: 'top-[16%] -left-20 w-[400px] h-[500px]', opacity: 0.34, blur: 'blur-[100px]' },
      { color: '#F59E0B', position: 'top-[34%] -right-16 w-[360px] h-[440px]', opacity: 0.28, blur: 'blur-[100px]' },
      { color: '#8B5CF6', position: 'bottom-[14%] left-[15%] w-[380px] h-[360px]', opacity: 0.22, blur: 'blur-[90px]' }
    ]
  },
  {
    id: 'desert_tabernacle',
    name: 'Desert Tabernacle & Turquoise',
    label: 'Tabernacle Gold',
    subtitle: 'Wilderness pillar of fire, desert sun, and turquoise stones',
    badge: 'TABERNACLE',
    accentHex: '#EAB308',
    secondaryHex: '#14B8A6',
    tertiaryHex: '#F97316',
    cardHex: '#120D03',
    bgHex: '#000000',
    borderHex: '#EAB30870',
    badgeHex: '#EAB308',
    accentText: 'text-yellow-400',
    category: 'Wilderness Sanctuary',
    fontFamily: "'Cinzel', serif",
    fontName: 'Desert Glory',
    stripes: ['#EAB308', '#14B8A6', '#F97316'],
    ambientGlows: [
      { color: '#EAB308', position: 'top-[16%] -left-20 w-[400px] h-[500px]', opacity: 0.32, blur: 'blur-[100px]' },
      { color: '#14B8A6', position: 'top-[34%] -right-16 w-[360px] h-[440px]', opacity: 0.28, blur: 'blur-[100px]' },
      { color: '#F97316', position: 'bottom-[14%] left-[15%] w-[380px] h-[360px]', opacity: 0.22, blur: 'blur-[90px]' }
    ]
  },
  {
    id: 'resurrection_dawn',
    name: 'Resurrection Lilac & Dawn',
    label: 'Resurrection Lilac',
    subtitle: 'Easter morning lilac, radiant magenta, and blinding white light',
    badge: 'RESURRECTION',
    accentHex: '#C084FC',
    secondaryHex: '#E879F9',
    tertiaryHex: '#FFFFFF',
    cardHex: '#0E0414',
    bgHex: '#000000',
    borderHex: '#C084FC70',
    badgeHex: '#C084FC',
    accentText: 'text-purple-300',
    category: 'Dawn Revival',
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontName: 'Morning Light',
    stripes: ['#C084FC', '#E879F9', '#FFFFFF'],
    ambientGlows: [
      { color: '#C084FC', position: 'top-[16%] -left-20 w-[400px] h-[500px]', opacity: 0.32, blur: 'blur-[100px]' },
      { color: '#E879F9', position: 'top-[34%] -right-16 w-[360px] h-[440px]', opacity: 0.26, blur: 'blur-[100px]' },
      { color: '#FFFFFF', position: 'bottom-[14%] left-[15%] w-[380px] h-[360px]', opacity: 0.16, blur: 'blur-[90px]' }
    ]
  },
  {
    id: 'zion_sapphire',
    name: 'Zion Sapphire & Altar Gold',
    label: 'Zion Sapphire',
    subtitle: 'Deep celestial sapphire throne room and pure altar gold',
    badge: 'ZION SAPPHIRE',
    accentHex: '#3B82F6',
    secondaryHex: '#60A5FA',
    tertiaryHex: '#FBBF24',
    cardHex: '#03091A',
    bgHex: '#000000',
    borderHex: '#3B82F670',
    badgeHex: '#3B82F6',
    accentText: 'text-blue-400',
    category: 'Heavenly Throne',
    fontFamily: "'Cinzel', serif",
    fontName: 'Throne Room',
    stripes: ['#3B82F6', '#60A5FA', '#FBBF24'],
    ambientGlows: [
      { color: '#3B82F6', position: 'top-[16%] -left-20 w-[400px] h-[500px]', opacity: 0.34, blur: 'blur-[100px]' },
      { color: '#60A5FA', position: 'top-[34%] -right-16 w-[360px] h-[440px]', opacity: 0.26, blur: 'blur-[100px]' },
      { color: '#FBBF24', position: 'bottom-[14%] left-[15%] w-[380px] h-[360px]', opacity: 0.22, blur: 'blur-[90px]' }
    ]
  },
  {
    id: 'alamo_rose',
    name: 'Alamo Rose & Texas Dusk',
    label: 'Texas Rose',
    subtitle: 'Warm Texas coral rose, sunset ruby, and obsidian shadows',
    badge: 'TEXAS ROSE',
    accentHex: '#FB7185',
    secondaryHex: '#F43F5E',
    tertiaryHex: '#FDA4AF',
    cardHex: '#140508',
    bgHex: '#000000',
    borderHex: '#FB718570',
    badgeHex: '#FB7185',
    accentText: 'text-rose-400',
    category: 'Texas Heritage',
    fontFamily: "'Space Grotesk', sans-serif",
    fontName: 'Heritage Sans',
    stripes: ['#FB7185', '#F43F5E', '#FDA4AF'],
    ambientGlows: [
      { color: '#FB7185', position: 'top-[16%] -left-20 w-[400px] h-[500px]', opacity: 0.34, blur: 'blur-[100px]' },
      { color: '#F43F5E', position: 'top-[34%] -right-16 w-[360px] h-[440px]', opacity: 0.28, blur: 'blur-[100px]' },
      { color: '#FDA4AF', position: 'bottom-[14%] left-[15%] w-[380px] h-[360px]', opacity: 0.20, blur: 'blur-[90px]' }
    ]
  },
  {
    id: 'cyber_sanctuary',
    name: 'Electric Cyber Sanctuary',
    label: 'Electric Cyber',
    subtitle: 'Ultra-vivid electric cyan, neon magenta, and lime revival',
    badge: 'CYBER GLOW',
    accentHex: '#00F0FF',
    secondaryHex: '#FF0055',
    tertiaryHex: '#FFE600',
    cardHex: '#030E14',
    bgHex: '#000000',
    borderHex: '#00F0FF70',
    badgeHex: '#00F0FF',
    accentText: 'text-cyan-300',
    category: 'Future Generation',
    fontFamily: "'Space Grotesk', sans-serif",
    fontName: 'Cyber High-Tech',
    stripes: ['#00F0FF', '#FF0055', '#FFE600'],
    ambientGlows: [
      { color: '#00F0FF', position: 'top-[16%] -left-20 w-[400px] h-[500px]', opacity: 0.36, blur: 'blur-[100px]' },
      { color: '#FF0055', position: 'top-[34%] -right-16 w-[360px] h-[440px]', opacity: 0.30, blur: 'blur-[100px]' },
      { color: '#FFE600', position: 'bottom-[14%] left-[15%] w-[380px] h-[360px]', opacity: 0.24, blur: 'blur-[90px]' }
    ]
  },
  {
    id: 'deep_abyss_aqua',
    name: 'Deep Ocean & Aquamarine',
    label: 'Deep Ocean',
    subtitle: 'Deep oceanic trench blue, electric aqua, and coastal mist',
    badge: 'DEEP OCEAN',
    accentHex: '#0284C7',
    secondaryHex: '#38BDF8',
    tertiaryHex: '#06B6D4',
    cardHex: '#020C16',
    bgHex: '#000000',
    borderHex: '#0284C770',
    badgeHex: '#0284C7',
    accentText: 'text-sky-400',
    category: 'Deep Waters',
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontName: 'Deep Tide',
    stripes: ['#0284C7', '#38BDF8', '#06B6D4'],
    ambientGlows: [
      { color: '#0284C7', position: 'top-[16%] -left-20 w-[400px] h-[500px]', opacity: 0.34, blur: 'blur-[100px]' },
      { color: '#38BDF8', position: 'top-[34%] -right-16 w-[360px] h-[440px]', opacity: 0.28, blur: 'blur-[100px]' },
      { color: '#06B6D4', position: 'bottom-[14%] left-[15%] w-[380px] h-[360px]', opacity: 0.22, blur: 'blur-[90px]' }
    ]
  }
];

const THEMES_STORAGE_KEY = 'youngfire_app_themes_v5';

export function getStoredThemes(): AppTheme[] {
  try {
    const raw = localStorage.getItem(THEMES_STORAGE_KEY);
    if (!raw) return APP_THEMES;
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : APP_THEMES;
  } catch {
    return APP_THEMES;
  }
}

export function saveTheme(theme: AppTheme): AppTheme[] {
  const current = getStoredThemes();
  const index = current.findIndex(t => t.id === theme.id);
  let updated: AppTheme[];
  if (index >= 0) {
    updated = [...current];
    updated[index] = theme;
  } else {
    updated = [...current, theme];
  }
  try {
    localStorage.setItem(THEMES_STORAGE_KEY, JSON.stringify(updated));
  } catch {}
  return updated;
}

export function deleteTheme(id: string): AppTheme[] {
  const current = getStoredThemes();
  const updated = current.filter(t => t.id !== id);
  try {
    localStorage.setItem(THEMES_STORAGE_KEY, JSON.stringify(updated));
  } catch {}
  return updated;
}

export function resetThemes(): AppTheme[] {
  try {
    localStorage.removeItem(THEMES_STORAGE_KEY);
  } catch {}
  return APP_THEMES;
}
