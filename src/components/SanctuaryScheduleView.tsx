import React, { useState, useEffect } from 'react';
import { Calendar as CalendarIcon, Clock, MapPin, Video, Flame } from 'lucide-react';
import { AppTheme } from '../data/appThemes';

interface SanctuaryScheduleViewProps {
  onOpenZoom?: () => void;
  onNavigate?: (tab: string) => void;
  activeTheme?: AppTheme;
}

export const SanctuaryScheduleView: React.FC<SanctuaryScheduleViewProps> = ({ 
  onOpenZoom, 
  activeTheme 
}) => {
  const accentColor = activeTheme?.accentHex || '#F59E0B';
  const borderColor = activeTheme?.borderHex || `${accentColor}60`;

  const [smallGroupLoc, setSmallGroupLoc] = useState<string>(() => {
    return localStorage.getItem('youngfire_small_group_location') || "The White's Residence • San Antonio, TX";
  });

  useEffect(() => {
    const handleLocUpdate = (e: any) => {
      if (e.detail?.location) {
        setSmallGroupLoc(e.detail.location);
      } else {
        setSmallGroupLoc(localStorage.getItem('youngfire_small_group_location') || "The White's Residence • San Antonio, TX");
      }
    };
    window.addEventListener('yf_small_group_location_updated', handleLocUpdate);
    return () => window.removeEventListener('yf_small_group_location_updated', handleLocUpdate);
  }, []);

  // Only YoungFire Small Groups have Zoom meetings scheduled; Open Bible and Sunday Worship are in-person
  const gatherings = [
    {
      id: 'small-group',
      title: 'YOUNGFIRE SMALL GROUP HUDDLE',
      day: 'Monday, Oct 5',
      time: '7:00 PM CST',
      location: smallGroupLoc,
      badge: 'Discipleship & Zoom Broadcast',
      hasZoom: true
    },
    {
      id: 'open-bible',
      title: 'OPEN BIBLE THURSDAYS',
      day: 'Thursday, Oct 8',
      time: 'All Day Consecration',
      location: 'Sanctuary Main Hall • San Antonio, TX',
      badge: 'In-Person Expository Study',
      hasZoom: false
    },
    {
      id: 'sunday-worship',
      title: 'SUNDAY CORPORATE WORSHIP',
      day: 'Sunday, Oct 11',
      time: '11:00 AM CST',
      location: 'Joshua House of Worship • Main Sanctuary',
      badge: 'In-Person Celebration',
      hasZoom: false
    }
  ];

  return (
    <div className="max-w-lg mx-auto px-4 py-6 space-y-5 text-white">
      <div className="flex items-center justify-between pb-3 border-b border-white/10">
        <div>
          <h2 className="font-['Outfit'] font-black text-xl tracking-wider uppercase text-white flex items-center gap-2">
            <CalendarIcon className="w-5 h-5" style={{ color: accentColor }} />
            Sanctuary Schedule
          </h2>
          <p className="text-xs text-slate-400">Weekly YoungFire Gatherings & Fellowship</p>
        </div>
      </div>

      <div className="space-y-3">
        {gatherings.map((g) => (
          <div 
            key={g.id} 
            className="p-4 rounded-2xl bg-black/85 border transition-all space-y-3 shadow-xl backdrop-blur-xl"
            style={{
              borderColor: borderColor,
              boxShadow: `0 4px 20px ${accentColor}15`
            }}
          >
            <div className="flex items-center justify-between">
              <span 
                className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider font-bold border"
                style={{
                  backgroundColor: `${accentColor}20`,
                  borderColor: `${accentColor}50`,
                  color: accentColor
                }}
              >
                {g.badge}
              </span>
              <span className="text-xs font-mono text-slate-300 font-bold">{g.day}</span>
            </div>
            <div>
              <h3 className="font-['Outfit'] font-black text-base tracking-wide text-white">{g.title}</h3>
              <div className="flex items-center gap-4 text-xs text-slate-400 mt-1">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" style={{ color: accentColor }} /> 
                  {g.time}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" style={{ color: accentColor }} /> 
                  {g.location}
                </span>
              </div>
            </div>
            {g.hasZoom ? (
              <button 
                onClick={onOpenZoom}
                className="w-full py-2.5 px-3 rounded-xl border text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-all shadow-md hover:scale-[1.01] active:scale-98"
                style={{
                  backgroundColor: accentColor,
                  borderColor: accentColor,
                  color: activeTheme?.id === 'spurs_stealth' ? '#000000' : '#FFFFFF'
                }}
              >
                <Video className="w-4 h-4 stroke-[2.5]" />
                <span>Join Small Group Zoom Broadcast</span>
              </button>
            ) : (
              <div className="w-full py-1.5 px-3 rounded-xl bg-white/5 border border-white/10 text-[11px] font-mono text-slate-400 flex items-center justify-center gap-2">
                <Flame className="w-3.5 h-3.5 text-slate-400" />
                <span>Sanctuary In-Person Consecration • San Antonio, TX</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SanctuaryScheduleView;
