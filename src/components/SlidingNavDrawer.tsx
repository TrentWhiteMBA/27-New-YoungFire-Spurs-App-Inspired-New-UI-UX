import React, { useState, useRef } from 'react';
import { 
  Flame, 
  BookOpen, 
  Compass, 
  Tv, 
  Radio, 
  PenTool, 
  Heart, 
  Settings, 
  ShieldAlert, 
  Sparkles,
  Users,
  Headphones,
  Sliders,
  ChevronLeft,
  ChevronRight,
  X
} from 'lucide-react';
import { CurrentUser } from './SettingsHUDModal';
import { AppTheme } from '../data/appThemes';

interface SlidingNavDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (tab: string, subView?: any) => void;
  onOpenSettingsModal: () => void;
  onOpenNotesModal: () => void;
  onOpenThemeModal: () => void;
  onOpenWelcomeModal: () => void;
  onToggleRadio?: () => void;
  isRadioPlaying?: boolean;
  currentStationName?: string;
  onNextStation?: () => void;
  onPrevStation?: () => void;
  onToggleMusicDock?: () => void;
  isMusicDockOpen?: boolean;
  onOpenZoomFlyer?: () => void;
  activeTheme?: AppTheme;
  currentUser?: CurrentUser | null;
}

export const SlidingNavDrawer: React.FC<SlidingNavDrawerProps> = ({
  isOpen,
  onClose,
  onNavigate,
  onOpenSettingsModal,
  onOpenNotesModal,
  onOpenThemeModal,
  onOpenWelcomeModal,
  onToggleRadio,
  isRadioPlaying = false,
  currentStationName,
  onNextStation,
  onPrevStation,
  onToggleMusicDock,
  isMusicDockOpen = false,
  onOpenZoomFlyer,
  activeTheme,
  currentUser
}) => {
  const [dragOffset, setDragOffset] = useState<number>(0);
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);
  const isDraggingRef = useRef<boolean>(false);

  if (!isOpen) return null;

  const accentColor = activeTheme?.accentHex || '#F59E0B';

  const isLeader = Boolean(
    currentUser?.isAdmin ||
    currentUser?.role?.toLowerCase().includes('facilitator') ||
    currentUser?.email?.toLowerCase().includes('trent') ||
    currentUser?.email?.toLowerCase().includes('whitney')
  );

  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    touchStartRef.current = { x: touch.clientX, y: touch.clientY };
    isDraggingRef.current = false;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchStartRef.current) return;
    const touch = e.touches[0];
    const deltaX = touch.clientX - touchStartRef.current.x;
    const deltaY = touch.clientY - touchStartRef.current.y;

    // If dragging rightwards and predominantly horizontal
    if (deltaX > 0 && deltaX > Math.abs(deltaY) * 0.7) {
      isDraggingRef.current = true;
      setDragOffset(deltaX);
    }
  };

  const handleTouchEnd = () => {
    if (isDraggingRef.current && dragOffset > 60) {
      onClose();
    }
    setDragOffset(0);
    touchStartRef.current = null;
    isDraggingRef.current = false;
  };

  const menuItems = [
    {
      id: 'fellowship',
      label: 'Sanctuary Fellowship Hub',
      icon: Users,
      action: () => { onNavigate('fellowship'); onClose(); }
    },
    {
      id: 'word-bible',
      label: '66-Book Scripture Reader',
      icon: BookOpen,
      action: () => { onNavigate('word', 'bible'); onClose(); }
    },
    {
      id: 'word-atlas',
      label: 'Imperial Scripture Atlas',
      icon: Compass,
      action: () => { onNavigate('word', 'atlas'); onClose(); }
    },
    {
      id: 'tv',
      label: 'Worship Sanctuary TV & Vault',
      icon: Tv,
      action: () => { onNavigate('tv'); onClose(); }
    },
    {
      id: 'radio',
      label: '24/7 Gospel Radio Player',
      icon: Radio,
      action: () => { onNavigate('radio'); onClose(); }
    },
    {
      id: 'prayer',
      label: 'Prayer Dock & Intercession',
      icon: Heart,
      action: () => { onNavigate('prayer_dock'); onClose(); }
    },
    {
      id: 'notes',
      label: 'Study Notes HUD',
      icon: PenTool,
      action: () => { onOpenNotesModal(); onClose(); }
    },
    {
      id: 'welcome',
      label: 'Welcome Sanctuary Portal',
      icon: Sparkles,
      action: () => { onOpenWelcomeModal(); onClose(); }
    },
    {
      id: 'settings',
      label: 'Settings & Device Profile',
      icon: Settings,
      action: () => { onOpenSettingsModal(); onClose(); }
    },
  ];

  return (
    <div 
      className="fixed inset-0 z-40 text-white flex select-none overflow-hidden font-['Outfit'] pointer-events-none"
    >
      {/* 1. SLIDING RIGHT DRAWER CONTENT with swipe-to-close & drag support */}
      <div 
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{
          transform: dragOffset > 0 ? `translateX(${dragOffset}px)` : 'none',
          transition: isDraggingRef.current ? 'none' : 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
        className="ml-auto w-[88%] sm:w-[84%] max-w-2xl h-full bg-[#000000] border-l border-white/20 shadow-[-30px_0_70px_rgba(0,0,0,0.95)] flex flex-col justify-between py-6 px-5 sm:px-8 relative z-10 overflow-y-auto no-scrollbar pointer-events-auto"
      >
        {/* Swipe Handle Indicator on Left Edge */}
        <div className="absolute left-2 top-1/2 -translate-y-1/2 w-1.5 h-12 bg-white/20 rounded-full sm:hidden pointer-events-none" />

        {/* Top Header & Brand Insignia */}
        <div className="flex items-center justify-between pb-3 border-b border-white/10 relative z-20">
          <div className="flex items-center gap-3">
            <div 
              className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg border flex-shrink-0"
              style={{
                backgroundColor: accentColor,
                borderColor: `${accentColor}80`,
                boxShadow: `0 0 16px ${accentColor}40`
              }}
            >
              <Flame className="w-5 h-5 text-black fill-current" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-black uppercase tracking-[0.2em] text-white font-['Outfit'] leading-tight">
                YOUNG<span style={{ color: accentColor }}>FIRE</span>
              </h3>
              <p className="text-[9px] font-mono tracking-[0.16em] uppercase text-slate-400">
                Joshua House of Worship &bull; San Antonio
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/15 text-slate-400 hover:text-white transition-colors cursor-pointer border border-white/10"
            title="Close Drawer"
            aria-label="Close Drawer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* QUICK SANCTUARY CONTROLS & DOCKS (Relocated from Top Banner) */}
        <div className="my-3 py-3 px-3 rounded-2xl bg-[#080808] border border-white/15 shadow-xl relative z-20 space-y-2.5">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono uppercase font-bold tracking-widest text-slate-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: accentColor }} />
              Quick Docks &amp; Controls
            </span>
            <span className="text-[9px] font-mono text-slate-500 uppercase">1-Tap Access</span>
          </div>

          {/* 24/7 Gospel Radio Mini Deck */}
          <div 
            className="p-2.5 rounded-xl border flex items-center justify-between gap-2 transition-all"
            style={{
              backgroundColor: isRadioPlaying ? `${accentColor}18` : 'rgba(255,255,255,0.03)',
              borderColor: isRadioPlaying ? `${accentColor}60` : 'rgba(255,255,255,0.1)'
            }}
          >
            <div className="flex items-center gap-2.5 min-w-0">
              <button
                onClick={() => {
                  if (onToggleRadio) onToggleRadio();
                  else window.dispatchEvent(new CustomEvent('yf_toggle_radio_dock'));
                }}
                className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform active:scale-95 cursor-pointer shadow-md"
                style={{
                  backgroundColor: accentColor,
                  color: activeTheme?.id === 'spurs_stealth' ? '#000000' : '#000000'
                }}
                title={isRadioPlaying ? 'Pause Gospel Radio' : 'Play 24/7 Gospel Radio'}
              >
                <Radio className={`w-4 h-4 ${isRadioPlaying ? 'animate-pulse' : ''}`} />
              </button>
              <div className="min-w-0">
                <span className="text-[10px] font-bold text-white uppercase tracking-wider block truncate">
                  24/7 Gospel Radio
                </span>
                <span className="text-[9px] font-mono text-slate-400 block truncate">
                  {currentStationName || 'Contemporary Praise & Worship'}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1 flex-shrink-0">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  if (onPrevStation) onPrevStation();
                }}
                className="p-1 rounded bg-white/5 hover:bg-white/15 text-slate-400 hover:text-white cursor-pointer"
                title="Previous Station"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  if (onNextStation) onNextStation();
                }}
                className="p-1 rounded bg-white/5 hover:bg-white/15 text-slate-400 hover:text-white cursor-pointer"
                title="Next Station"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Quick Buttons Grid (Study Notes, Zoom Flyer, Praise, Welcome, Settings) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {/* 1. Study Notes Button */}
            <button
              onClick={() => {
                onOpenNotesModal();
                onClose();
              }}
              className="p-2.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-left flex items-center gap-2 transition-all cursor-pointer group"
              title="Open Global Study Notes & Revelation HUD"
            >
              <div 
                className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: `${accentColor}25`, color: accentColor }}
              >
                <PenTool className="w-3.5 h-3.5" />
              </div>
              <div className="min-w-0">
                <span className="text-[11px] font-bold text-white block uppercase tracking-wider font-['Outfit'] truncate">
                  Study Notes
                </span>
                <span className="text-[9px] font-mono text-slate-400 block truncate">Revelation HUD</span>
              </div>
            </button>

            {/* 2. Ministry Zoom Flyer Button */}
            <button
              onClick={() => {
                if (onOpenZoomFlyer) onOpenZoomFlyer();
                else window.dispatchEvent(new CustomEvent('yf_open_broadcast'));
                onClose();
              }}
              className="p-2.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-left flex items-center gap-2 transition-all cursor-pointer group"
              title="Official Ministry Zoom Flyer & Broadcast"
            >
              <div 
                className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 bg-amber-500/20 text-amber-400"
              >
                <Flame className="w-3.5 h-3.5 fill-current" />
              </div>
              <div className="min-w-0">
                <span className="text-[11px] font-bold text-white block uppercase tracking-wider font-['Outfit'] truncate">
                  Zoom Flyer
                </span>
                <span className="text-[9px] font-mono text-slate-400 block truncate">Small Group</span>
              </div>
            </button>

            {/* 3. Praise Anthems Dock */}
            <button
              onClick={() => {
                if (onToggleMusicDock) onToggleMusicDock();
                else window.dispatchEvent(new CustomEvent('yf_toggle_music_dock'));
                onClose();
              }}
              className="p-2.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-left flex items-center gap-2 transition-all cursor-pointer group"
              title="Toggle Praise Track Dock (200+ Anthems)"
            >
              <div 
                className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 bg-cyan-500/20 text-cyan-400"
              >
                <Headphones className="w-3.5 h-3.5" />
              </div>
              <div className="min-w-0">
                <span className="text-[11px] font-bold text-white block uppercase tracking-wider font-['Outfit'] truncate">
                  Praise Tracks
                </span>
                <span className="text-[9px] font-mono text-slate-400 block truncate">200+ Anthems</span>
              </div>
            </button>

            {/* 4. Welcome Sanctuary Hub */}
            <button
              onClick={() => {
                onOpenWelcomeModal();
                onClose();
              }}
              className="p-2.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-left flex items-center gap-2 transition-all cursor-pointer group"
              title="Open Welcome Sanctuary & Connect Hub"
            >
              <div 
                className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 bg-purple-500/20 text-purple-400"
              >
                <Sparkles className="w-3.5 h-3.5" />
              </div>
              <div className="min-w-0">
                <span className="text-[11px] font-bold text-white block uppercase tracking-wider font-['Outfit'] truncate">
                  Welcome Hub
                </span>
                <span className="text-[9px] font-mono text-slate-400 block truncate">Connect Portal</span>
              </div>
            </button>

            {/* 5. Sanctuary Settings */}
            <button
              onClick={() => {
                onOpenSettingsModal();
                onClose();
              }}
              className="p-2.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-left flex items-center gap-2 transition-all cursor-pointer group"
              title="Sanctuary Settings & Voice"
            >
              <div 
                className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 bg-slate-700/40 text-slate-300"
              >
                <Sliders className="w-3.5 h-3.5" />
              </div>
              <div className="min-w-0">
                <span className="text-[11px] font-bold text-white block uppercase tracking-wider font-['Outfit'] truncate">
                  Settings
                </span>
                <span className="text-[9px] font-mono text-slate-400 block truncate">Profile & Voice</span>
              </div>
            </button>

            {/* 6. Switch Style / Themes */}
            <button
              onClick={() => {
                onOpenThemeModal();
                onClose();
              }}
              className="p-2.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-left flex items-center gap-2 transition-all cursor-pointer group"
              title="Switch Sanctuary App Style & Themes"
            >
              <div 
                className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: `${accentColor}30`, color: accentColor }}
              >
                <span className="text-xs font-black">★</span>
              </div>
              <div className="min-w-0">
                <span className="text-[11px] font-bold text-white block uppercase tracking-wider font-['Outfit'] truncate">
                  Theme Styles
                </span>
                <span className="text-[9px] font-mono text-slate-400 block truncate">
                  {activeTheme?.label || activeTheme?.badge || 'Styles'}
                </span>
              </div>
            </button>
          </div>
        </div>

        {/* Vertical Left-Aligned Menu Options */}
        <nav className="space-y-2.5 my-auto py-2 relative z-20">
          <div className="text-[10px] font-mono uppercase tracking-widest text-slate-500 px-1 pb-1">
            Navigation Directory
          </div>
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={item.action}
                className="w-full flex items-center gap-3.5 text-left text-slate-200 hover:text-white group cursor-pointer transition-colors py-1 px-1 rounded-lg hover:bg-white/5"
              >
                <Icon className="w-4 h-4 text-slate-400 group-hover:text-amber-400 transition-colors flex-shrink-0" />
                <span className="text-xs sm:text-sm font-semibold tracking-wide font-['Barlow_Condensed',sans-serif] uppercase truncate">
                  {item.label}
                </span>
              </button>
            );
          })}

          {/* Facilitators Executive Admin CMS */}
          {isLeader && (
            <button
              onClick={() => {
                window.dispatchEvent(new CustomEvent('yf_open_admin_cms'));
                onClose();
              }}
              className="w-full flex items-center gap-3.5 text-left text-amber-300 hover:text-amber-200 group cursor-pointer transition-colors pt-2.5 border-t border-white/10 px-1"
            >
              <ShieldAlert className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <span className="text-xs sm:text-sm font-bold tracking-wider font-['Barlow_Condensed',sans-serif] uppercase truncate">
                Executive Admin CMS
              </span>
            </button>
          )}
        </nav>

        {/* Bottom Leadership Sign-Off & Close Action */}
        <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-slate-400 relative z-20">
          <span className="truncate">Swipe right &rarr; or tap</span>
          <button 
            onClick={onClose}
            className="text-amber-400 hover:underline uppercase tracking-wider cursor-pointer ml-2 flex-shrink-0 font-bold"
          >
            Close &larr;
          </button>
        </div>

        {/* Artistic HD Black & White Photography */}
        <div 
          className="absolute right-0 bottom-0 w-80 sm:w-[480px] h-[380px] sm:h-[500px] pointer-events-none z-0 overflow-hidden select-none"
          style={{
            maskImage: 'radial-gradient(circle at 88% 88%, black 25%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0.2) 72%, transparent 95%)',
            WebkitMaskImage: 'radial-gradient(circle at 88% 88%, black 25%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0.2) 72%, transparent 95%)',
          }}
        >
          <img
            src="/image_4.png"
            alt="Sanctuary Word - Black and White HD"
            loading="eager"
            decoding="sync"
            className="w-full h-full object-cover object-bottom-right"
            style={{
              filter: 'grayscale(100%) contrast(140%) brightness(108%)',
              imageRendering: '-webkit-optimize-contrast',
              mixBlendMode: 'screen',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black pointer-events-none" />
        </div>

      </div>

    </div>
  );
};

export default SlidingNavDrawer;
