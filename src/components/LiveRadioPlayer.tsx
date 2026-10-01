import React from 'react';
import { Radio, ArrowLeft, Play, Pause } from 'lucide-react';
import { GOSPEL_STATIONS, RadioStation } from '../data/radioStations';

interface LiveRadioPlayerProps {
  onBack?: () => void;
  activeStationId?: string;
  isPlaying?: boolean;
  onSelectStation?: (s: RadioStation) => void;
  onTogglePlay?: () => void;
  [key: string]: any;
}

export const LiveRadioPlayer: React.FC<LiveRadioPlayerProps> = ({
  onBack,
  activeStationId,
  isPlaying,
  onSelectStation,
  onTogglePlay
}) => {
  return (
    <div className="max-w-lg mx-auto px-4 py-6 space-y-5 text-white">
      <div className="flex items-center gap-3 pb-3 border-b border-white/10">
        {onBack && (
          <button onClick={onBack} className="p-1.5 rounded-full hover:bg-white/10 text-slate-400 hover:text-white cursor-pointer">
            <ArrowLeft className="w-5 h-5" />
          </button>
        )}
        <div>
          <h2 className="font-pro-display text-xl tracking-wider uppercase text-white flex items-center gap-2">
            <Radio className="w-5 h-5 text-amber-400" />
            24/7 Gospel Radio Live
          </h2>
          <p className="text-xs text-slate-400">Praise, Worship & Consecration Broadcasts</p>
        </div>
      </div>

      <div className="space-y-3">
        {GOSPEL_STATIONS.map((station) => {
          const isCurrent = station.id === activeStationId;
          return (
            <div
              key={station.id}
              onClick={() => onSelectStation && onSelectStation(station)}
              className={`p-4 rounded-2xl border flex items-center justify-between transition-all cursor-pointer ${
                isCurrent ? 'bg-amber-500/20 border-amber-400' : 'bg-black/80 border-white/20 hover:border-white/40'
              }`}
            >
              <div>
                <h4 className="font-bold text-sm text-white">{station.name}</h4>
                <div className="text-xs text-amber-400">{station.genre}</div>
                <div className="text-[10px] text-slate-400">{station.location}</div>
              </div>
              {isCurrent && (
                <button
                  onClick={(e) => { e.stopPropagation(); onTogglePlay && onTogglePlay(); }}
                  className="w-10 h-10 rounded-full bg-amber-400 text-black flex items-center justify-center flex-shrink-0"
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LiveRadioPlayer;
