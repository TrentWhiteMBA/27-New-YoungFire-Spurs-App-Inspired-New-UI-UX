import React from 'react';
import { BookOpen, ArrowLeft, CheckCircle2 } from 'lucide-react';

interface PhysicalBibleTrackerProps {
  onBack?: () => void;
  onOpenPassage?: (passage: { bookId: string; chapter: number }) => void;
}

export const PhysicalBibleTracker: React.FC<PhysicalBibleTrackerProps> = ({ onBack }) => {
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
            <BookOpen className="w-5 h-5 text-amber-400" />
            Physical Bible Tracker
          </h2>
          <p className="text-xs text-slate-400">Consecrated 66-Book Scripture Reading Progress</p>
        </div>
      </div>
      <div className="p-5 rounded-2xl bg-black/80 border border-white/20 space-y-3">
        <h3 className="font-bold text-sm">66-Book Reading Consecration</h3>
        <p className="text-xs text-slate-400">Track your daily physical scripture reading across Genesis through Revelation.</p>
      </div>
    </div>
  );
};

export default PhysicalBibleTracker;
