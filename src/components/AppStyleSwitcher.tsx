import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, SlidersHorizontal, Map, Sparkles } from 'lucide-react';
import { APP_THEMES, AppTheme } from '../data/appThemes';

interface AppStyleSwitcherProps {
  onCycleNextTheme?: () => void;
  onCyclePrevTheme?: () => void;
  onSelectTheme?: (themeId: string) => void;
  onOpenThemeModal?: () => void; // Fallback compat
  activeTheme?: AppTheme;
  backgroundMode?: 'map' | 'obsidian_glow';
  onToggleBackgroundMode?: () => void;
  flush?: boolean;
  className?: string;
}

export const AppStyleSwitcher: React.FC<AppStyleSwitcherProps> = ({
  onCycleNextTheme,
  onCyclePrevTheme,
  onSelectTheme,
  onOpenThemeModal,
  activeTheme,
  backgroundMode = 'map',
  onToggleBackgroundMode,
  flush = false,
  className = ''
}) => {
  const [showInlinePicker, setShowInlinePicker] = useState<boolean>(false);

  const themeBadge = activeTheme?.badge 
    ? activeTheme.badge.toUpperCase() 
    : (activeTheme?.name ? activeTheme.name.toUpperCase() : 'SILVER & BLACK');

  const accentColor = activeTheme?.accentHex || '#FFFFFF';
  const borderColor = activeTheme?.borderHex || `${accentColor}70`;

  const handleBarClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    // Directly cycle to next theme in-place with NO pop-up window
    if (onCycleNextTheme) {
      onCycleNextTheme();
    } else if (onOpenThemeModal) {
      onOpenThemeModal();
    }
  };

  const handlePrevClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onCyclePrevTheme) onCyclePrevTheme();
    else if (onCycleNextTheme) onCycleNextTheme();
  };

  const handleTogglePicker = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowInlinePicker(prev => !prev);
  };

  const handleToggleBg = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onToggleBackgroundMode) {
      onToggleBackgroundMode();
    }
  };

  return (
    <div className={`w-full flex flex-col ${flush ? 'gap-0' : 'gap-2'} ${className}`}>
      
      {/* Main Switcher Bar: Directly switches theme on tap with NO popup window */}
      <div 
        onClick={handleBarClick}
        className={`w-full py-2.5 px-3.5 sm:px-6 bg-black/90 hover:bg-black transition-all cursor-pointer flex items-center justify-between gap-2 shadow-lg select-none group border ${
          flush ? 'rounded-none border-x-0 border-t-0' : 'rounded-2xl'
        }`}
        style={{
          borderColor: borderColor,
          boxShadow: `0 0 16px ${accentColor}20`
        }}
        title="Tap to switch to next sanctuary theme"
      >
        {/* Left: SWITCH YOUR APP STYLE in bold font stretching across */}
        <div className="flex items-center gap-2 flex-1 min-w-0">
          <button
            onClick={handlePrevClick}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            title="Previous theme"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>
          
          <span className="font-black tracking-[0.16em] sm:tracking-[0.22em] text-xs sm:text-sm text-white uppercase group-hover:text-amber-200 transition-colors drop-shadow truncate">
            SWITCH YOUR APP STYLE
          </span>
        </div>

        {/* Right Controls: Theme Badge Pill, Background Choice Toggle & Palette Toggle */}
        <div className="flex items-center gap-1.5 flex-shrink-0">
          {/* Background Mode Toggle: Map vs Pure Obsidian & Color Glows */}
          <button
            onClick={handleToggleBg}
            className="px-2 py-1 rounded-lg text-[9px] sm:text-[10px] font-mono font-bold uppercase transition-all flex items-center gap-1 border cursor-pointer hover:scale-105 active:scale-95"
            style={{
              backgroundColor: backgroundMode === 'map' ? 'rgba(255,255,255,0.08)' : `${accentColor}25`,
              borderColor: backgroundMode === 'map' ? 'rgba(255,255,255,0.2)' : accentColor,
              color: backgroundMode === 'map' ? '#CBD5E1' : accentColor
            }}
            title={backgroundMode === 'map' ? "Map Active • Tap for Black Background & Color Splashes" : "Black & Color Splashes Active • Tap for Map Background"}
          >
            {backgroundMode === 'map' ? (
              <>
                <Map className="w-3 h-3 text-slate-300" />
                <span className="hidden xs:inline">Map</span>
              </>
            ) : (
              <>
                <Sparkles className="w-3 h-3" style={{ color: accentColor }} />
                <span>Black Splash</span>
              </>
            )}
          </button>

          {/* Pill Badge */}
          <div 
            className="px-2 sm:px-2.5 py-1 rounded-md text-[10px] sm:text-[11px] font-black tracking-wider sm:tracking-widest uppercase transition-all flex items-center gap-1"
            style={{
              border: `1.5px solid ${accentColor}`,
              backgroundColor: `${accentColor}18`,
              color: accentColor,
              boxShadow: `0 0 12px ${accentColor}30`
            }}
          >
            <span className="truncate max-w-[120px] sm:max-w-[180px]">[ {themeBadge} ]</span>
            <ChevronRight className="w-3 h-3 opacity-70 group-hover:translate-x-0.5 transition-transform flex-shrink-0" />
          </div>

          {/* Inline Color Palette Expansion Trigger (NO popup modal window) */}
          <button
            onClick={handleTogglePicker}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/15 transition-colors cursor-pointer"
            title="Toggle inline color palette"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Inline Non-Modal Color Strip: Slides down right beneath the bar without any popup window */}
      {showInlinePicker && (
        <div 
          className={`w-full p-3 sm:px-6 bg-black/95 border backdrop-blur-xl flex flex-col gap-2.5 animate-fadeIn shadow-2xl ${
            flush ? 'rounded-none border-x-0' : 'rounded-2xl'
          }`}
          style={{ borderColor }}
        >
          {/* Background Mode Selector */}
          <div className="flex items-center justify-between px-1 pb-1 border-b border-white/10">
            <span className="text-[10px] font-mono text-slate-300 uppercase font-bold">
              Background Canvas:
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => onToggleBackgroundMode && onToggleBackgroundMode()}
                className={`px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold flex items-center gap-1.5 border transition-all cursor-pointer ${
                  backgroundMode === 'map' ? 'bg-white/15 border-white text-white shadow-sm' : 'border-white/15 text-slate-400'
                }`}
              >
                <Map className="w-3 h-3" />
                <span>San Antonio Map</span>
              </button>
              <button
                onClick={() => onToggleBackgroundMode && onToggleBackgroundMode()}
                className={`px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold flex items-center gap-1.5 border transition-all cursor-pointer ${
                  backgroundMode === 'obsidian_glow' ? 'border-white text-white shadow-sm' : 'border-white/15 text-slate-400'
                }`}
                style={{
                  backgroundColor: backgroundMode === 'obsidian_glow' ? `${accentColor}30` : 'transparent',
                  borderColor: backgroundMode === 'obsidian_glow' ? accentColor : undefined,
                  color: backgroundMode === 'obsidian_glow' ? accentColor : undefined
                }}
              >
                <Sparkles className="w-3 h-3" />
                <span>Black Canvas &amp; Color Splashes</span>
              </button>
            </div>
          </div>

          {/* Theme Badges List */}
          <div className="w-full flex items-center gap-2 overflow-x-auto no-scrollbar pt-1">
            {APP_THEMES.map((t) => {
              const isSelected = t.id === activeTheme?.id;
              return (
                <button
                  key={t.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (onSelectTheme) onSelectTheme(t.id);
                  }}
                  className={`flex-shrink-0 flex items-center gap-1.5 px-2.5 py-1 rounded-lg border transition-all cursor-pointer text-left ${
                    isSelected ? 'ring-1 shadow-md scale-102' : 'hover:border-white/40'
                  }`}
                  style={{
                    borderColor: isSelected ? t.accentHex : 'rgba(255,255,255,0.15)',
                    backgroundColor: isSelected ? `${t.accentHex}25` : 'rgba(255,255,255,0.05)',
                    color: isSelected ? '#FFFFFF' : '#94A3B8'
                  }}
                  title={`${t.name} (${t.fontName || 'Default font'})`}
                >
                  {/* Multi-color dot/stripe */}
                  {t.stripes ? (
                    <div className="w-3.5 h-3.5 rounded-full overflow-hidden flex flex-shrink-0 border border-white/30">
                      <span className="w-1/3 h-full" style={{ backgroundColor: t.stripes[0] }} />
                      <span className="w-1/3 h-full" style={{ backgroundColor: t.stripes[1] }} />
                      <span className="w-1/3 h-full" style={{ backgroundColor: t.stripes[2] }} />
                    </div>
                  ) : (
                    <span 
                      className="w-3.5 h-3.5 rounded-full flex-shrink-0 border border-white/30"
                      style={{ backgroundColor: t.accentHex }}
                    />
                  )}
                  <span className="text-[10px] font-bold tracking-wider uppercase whitespace-nowrap">
                    {t.label || t.badge}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

    </div>
  );
};

export default AppStyleSwitcher;
