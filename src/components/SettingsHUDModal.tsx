import React from 'react';
import { X, User, Bell, Volume2, Shield, Moon } from 'lucide-react';
import { AppTheme } from '../data/appThemes';

export interface CurrentUser {
  id: string;
  name: string;
  fullName?: string;
  email: string;
  role?: string;
  ministryRole?: string;
  calling?: string;
  group?: string;
  gender?: 'male' | 'female' | string;
  avatar?: string;
  churchMembership?: string;
  residence?: string;
  phone?: string;
  notes?: string;
  prayerRequests?: string;
  accountType?: string;
  birthday?: string;
  ministryRoleId?: string;
  ministryRoleLabel?: string;
  joinedAt?: string;
  isAdmin?: boolean;
}

interface SettingsHUDModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentUser: CurrentUser | null;
  onUpdateUser?: (updated: CurrentUser) => void;
  onSignOut?: () => void;
  masterVolume?: number;
  onVolumeChange?: (vol: number) => void;
  activeTheme?: AppTheme;
  onOpenThemeModal?: () => void;
  [key: string]: any;
}

export const SettingsHUDModal: React.FC<SettingsHUDModalProps> = ({
  isOpen,
  onClose,
  currentUser,
  onSignOut,
  masterVolume = 1,
  onVolumeChange,
  activeTheme,
  onOpenThemeModal
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="w-full max-w-md bg-[#000000] border border-white/20 rounded-3xl p-6 shadow-2xl text-white space-y-6">
        <div className="flex items-center justify-between pb-3 border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-400">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-pro-display text-base tracking-wider uppercase">Sanctuary Settings</h3>
              <p className="text-[10px] font-mono text-slate-400">YoungFire Ministry • Joshua House</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* User Profile */}
        <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-amber-500 to-orange-500 flex items-center justify-center text-black font-black text-lg">
              {currentUser?.name ? currentUser.name.slice(0, 2).toUpperCase() : 'YF'}
            </div>
            <div>
              <div className="font-bold text-sm">{currentUser?.fullName || currentUser?.name || 'Sanctuary Disciple'}</div>
              <div className="text-xs text-slate-400">{currentUser?.email || 'youngfire@jhow.org'}</div>
              <div className="text-[10px] font-mono text-amber-400 mt-0.5 uppercase tracking-wider">{currentUser?.calling || 'Young Adult Disciple'}</div>
            </div>
          </div>
        </div>

        {/* Audio Volume */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-300">
            <span className="flex items-center gap-1.5"><Volume2 className="w-4 h-4 text-amber-400" /> Sanctuary Audio Master</span>
            <span className="font-mono text-amber-400">{Math.round(masterVolume * 100)}%</span>
          </div>
          <input 
            type="range" 
            min="0" 
            max="1" 
            step="0.05"
            value={masterVolume} 
            onChange={(e) => onVolumeChange && onVolumeChange(parseFloat(e.target.value))}
            className="w-full accent-amber-500 cursor-pointer"
          />
        </div>

        {/* App Theme */}
        {onOpenThemeModal && (
          <button
            onClick={() => { onClose(); onOpenThemeModal(); }}
            className="w-full py-3 px-4 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-xs font-semibold uppercase tracking-wider flex items-center justify-between transition-colors cursor-pointer"
          >
            <span className="flex items-center gap-2"><Moon className="w-4 h-4 text-amber-400" /> Switch Theme Style</span>
            <span className="text-amber-400 font-mono">[{activeTheme?.name || 'Spurs Noir'}]</span>
          </button>
        )}

        {/* Sign Out */}
        {onSignOut && (
          <button
            onClick={() => { onSignOut(); onClose(); }}
            className="w-full py-2.5 rounded-xl border border-red-500/30 text-red-400 hover:bg-red-500/10 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
          >
            Sign Out of Sanctuary
          </button>
        )}
      </div>
    </div>
  );
};

export default SettingsHUDModal;
