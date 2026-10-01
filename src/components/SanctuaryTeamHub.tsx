import React from 'react';
import { Users, Shield, Flame, ChevronRight } from 'lucide-react';
import { CurrentUser } from './SettingsHUDModal';

interface SanctuaryTeamHubProps {
  currentUser: CurrentUser | null;
  onNavigateToTab?: (tab: string) => void;
  onOpenRosterModal?: () => void;
  [key: string]: any;
}

export const SanctuaryTeamHub: React.FC<SanctuaryTeamHubProps> = ({
  currentUser,
  onNavigateToTab,
  onOpenRosterModal
}) => {
  const leaders = [
    { name: 'Lead Facilitator Trent D. White', role: 'Lead Facilitator', calling: 'Discipleship & Vision' },
    { name: 'Lead Facilitator Whitney White', role: 'Lead Facilitator', calling: 'Sisterhood & Administration' },
    { name: 'YoungFire Core Team', role: 'Facilitators', calling: 'Hospitality & Prayer' }
  ];

  return (
    <div className="max-w-lg mx-auto px-4 py-6 space-y-5 text-white">
      <div className="flex items-center justify-between pb-3 border-b border-white/10">
        <div>
          <h2 className="font-pro-display text-xl tracking-wider uppercase text-white flex items-center gap-2">
            <Users className="w-5 h-5 text-amber-400" />
            Sanctuary Team Hub
          </h2>
          <p className="text-xs text-slate-400">Leadership Roster & Fellowship Cohorts</p>
        </div>
      </div>

      <div className="space-y-3">
        {leaders.map((leader, i) => (
          <div key={i} className="p-4 rounded-2xl bg-black/80 border border-white/20 flex items-center justify-between shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-500 to-orange-500 flex items-center justify-center text-black font-black text-sm">
                {leader.name.slice(0, 2).toUpperCase()}
              </div>
              <div>
                <h4 className="font-bold text-sm text-white">{leader.name}</h4>
                <div className="text-xs text-amber-400 font-mono">{leader.role}</div>
                <div className="text-[10px] text-slate-400">{leader.calling}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {onOpenRosterModal && (
        <button
          onClick={onOpenRosterModal}
          className="w-full py-3 px-4 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/20 text-xs font-bold uppercase tracking-wider flex items-center justify-between cursor-pointer transition-colors"
        >
          <span>View Complete Discipleship Roster</span>
          <ChevronRight className="w-4 h-4 text-amber-400" />
        </button>
      )}
    </div>
  );
};

export default SanctuaryTeamHub;
