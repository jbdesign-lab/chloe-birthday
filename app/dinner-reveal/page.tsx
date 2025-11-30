'use client'

import { useState, useEffect } from 'react';
import { ChristmasCard, FestiveButton, FestiveTitle } from '../components/FestiveComponents';
import Snowfall from '../components/Snowfall';

export default function DinnerRevealPage() {
  const [currentTime, setCurrentTime] = useState<Date | null>(null);
  const [canReveal, setCanReveal] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const now = new Date();
    setCurrentTime(now);
    
    // Check if it's after 5 PM (17:00)
    const fivePM = new Date();
    fivePM.setHours(17, 0, 0, 0);
    
    setCanReveal(now >= fivePM);
  }, []);

  const handleReveal = () => {
    if (canReveal) {
      setIsRevealed(true);
    }
  };

  if (!currentTime) {
    return (
      <div className="min-h-screen relative overflow-hidden">
        <Snowfall />
        <div className="relative z-10 flex min-h-screen items-center justify-center p-4">
          <ChristmasCard className="text-center">
            <div className="text-2xl">🕐 Loading...</div>
          </ChristmasCard>
        </div>
      </div>
    );
  }

  if (isRevealed) {
    return (
      <div className="min-h-screen relative overflow-hidden">
        <Snowfall />
        
        <div className="relative z-10 min-h-screen p-2 sm:p-4 py-4 sm:py-8">
          <main className="w-full max-w-4xl mx-auto">
            <ChristmasCard className="text-center">
              <FestiveTitle>
                Your Birthday Dinner Revealed! 🍽️
              </FestiveTitle>
              
              <div className="space-y-6 mb-8">
                <div className="text-6xl mb-6">🥢✨</div>
                
                <div className="bg-linear-to-r from-red-50 to-pink-50 p-6 rounded-xl border-2 border-red-200">
                  <h2 className="festive-text text-3xl font-bold text-red-700 mb-4">
                    ROKA Mayfair
                  </h2>
                  <p className="text-lg text-gray-700 mb-4">
                    🌟 <strong>Contemporary Japanese Robatayaki</strong> 🌟
                  </p>
                  <p className="text-gray-600">
                    Located in the heart of Mayfair, ROKA is renowned for its innovative take on 
                    Japanese cuisine, featuring the ancient art of robatayaki - cooking over an open charcoal fire.
                  </p>
                </div>

                <div className="bg-green-50 p-6 rounded-xl border-2 border-green-200">
                  <h3 className="festive-text text-2xl font-semibold text-green-700 mb-3">
                    🍾 Our Seasonal Tasting Menu
                  </h3>
                  <p className="text-sm text-green-600 mb-4 italic">
                    Minimum 2 people • Designed to share amongst the table
                  </p>
                  <div className="space-y-3 text-left text-gray-700 text-sm">
                    <div>
                      <p className="font-semibold">Spinach leaves and sesame dressing (gf)(vg)</p>
                      <p className="text-xs text-gray-500 italic">goma fuumi no horenso salada</p>
                    </div>
                    
                    <div>
                      <p className="font-semibold">Tuna, seabass and salmon sashimi</p>
                      <p className="text-xs text-gray-500 italic">sashimi moriawase</p>
                    </div>

                    <div>
                      <p className="font-semibold">Yellowtail tartare, lemon, chilli and ginger pearls (gf)</p>
                      <p className="text-xs text-gray-500 italic">hamachi no tartare</p>
                    </div>

                    <div>
                      <p className="font-semibold">Raw salmon, avocado and asparagus with wasabi tobiko and tenkasu</p>
                      <p className="text-xs text-gray-500 italic">sake to avocado maki</p>
                    </div>

                    <div>
                      <p className="font-semibold">Beef, ginger and sesame dumplings</p>
                      <p className="text-xs text-gray-500 italic">gyuniku to goma no gyoza</p>
                    </div>

                    <div>
                      <p className="font-semibold">Tiger prawn tempura with spicy yuzu sauce</p>
                      <p className="text-xs text-gray-500 italic">kuruma-ebi</p>
                    </div>

                    <div>
                      <p className="font-semibold">Baby back pork ribs with sansho and cashew nuts</p>
                      <p className="text-xs text-gray-500 italic">kobuta no ribs yawaraka nikomiyaki</p>
                    </div>

                    <div>
                      <p className="font-semibold">Cedar roast baby chicken with chilli and lemon (gf)</p>
                      <p className="text-xs text-gray-500 italic">hinadori no lemon miso yaki</p>
                    </div>

                    <div>
                      <p className="font-semibold">Asparagus with sweet soy and sesame (vg)</p>
                      <p className="text-xs text-gray-500 italic">yaki asparagus</p>
                    </div>

                    <div>
                      <p className="font-semibold">Seabream fillet, ryotei miso and red onion (gf)</p>
                      <p className="text-xs text-gray-500 italic">tai no miso-yaki</p>
                    </div>

                    <div className="border-t pt-3 mt-4">
                      <p className="font-semibold text-pink-700">🎂 ROKA dessert platter</p>
                      <p className="text-xs text-pink-500 italic">Perfect for birthday celebrations!</p>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 p-6 rounded-xl border-2 border-yellow-200">
                  <h3 className="festive-text text-2xl font-semibold text-yellow-800 mb-3">
                    ✨ Your Birthday Experience
                  </h3>
                  <div className="space-y-3 text-gray-700">
                    <p className="font-medium">
                      🕖 <strong>7:00 PM - 9:00 PM reservation</strong>
                    </p>
                    <p>
                      This is the last thing on our agenda! We'll be enjoying their curated tasting menu. Each dish is designed to be a celebration 
                      of flavors, perfect for your special birthday dinner!
                    </p>
                    <p className="text-sm text-yellow-700 italic">
                      💝 Dress code: Smart casual (but you always look stunning!)
                    </p>
                  </div>
                </div>

                <div className="bg-pink-50 p-4 rounded-xl border-2 border-pink-200">
                  <p className="text-pink-800 font-medium text-lg">
                    🎉 I hope you have had a good day so far! This should be the cherry on the top 💖
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <FestiveButton 
                  href="/schedule" 
                  variant="activity" 
                  className="w-full text-lg py-3"
                >
                  📅 Back to Schedule
                </FestiveButton>
              </div>
            </ChristmasCard>
          </main>
        </div>
      </div>
    );
  }

  const currentHour = currentTime.getHours();
  const currentMinute = currentTime.getMinutes();
  const timeUntil5PM = canReveal ? null : `${17 - currentHour - (currentMinute > 0 ? 1 : 0)} hours and ${currentMinute > 0 ? 60 - currentMinute : 0} minutes`;

  return (
    <div className="min-h-screen relative overflow-hidden">
      <Snowfall />
      
      <div className="relative z-10 flex min-h-screen items-center justify-center p-2 sm:p-4">
        <main className="w-full max-w-3xl">
          <ChristmasCard className="text-center">
            <FestiveTitle>
              Mystery Dinner Awaits! 🕐
            </FestiveTitle>
            
            <div className="space-y-6 mb-8">
              <div className="text-6xl mb-6">🔒🍽️</div>
              
              {!canReveal ? (
                <>
                  <div className="bg-orange-50 p-6 rounded-xl border-2 border-orange-200">
                    <h3 className="festive-text text-2xl font-semibold text-orange-800 mb-3">
                      ⏰ Not Yet Time!
                    </h3>
                    <p className="text-lg text-orange-700 mb-2">
                      Your mystery birthday dinner can only be revealed after <strong>5:00 PM</strong>!
                    </p>
                    <p className="text-orange-600">
                      Current time: <strong>{currentTime.toLocaleTimeString()}</strong>
                    </p>
                    <p className="text-orange-600 text-sm mt-2">
                      Time remaining: <strong>{timeUntil5PM}</strong>
                    </p>
                  </div>

                  <div className="bg-pink-50 p-4 rounded-xl border-2 border-pink-200">
                    <p className="text-pink-700">
                      🎭 The mystery dinner is something very special... 
                      but patience makes it even sweeter! ✨
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div className="bg-green-50 p-6 rounded-xl border-2 border-green-200">
                    <h3 className="festive-text text-2xl font-semibold text-green-800 mb-3">
                      🎉 It's Time!
                    </h3>
                    <p className="text-lg text-green-700 mb-2">
                      The clock has struck 5 PM! You can now reveal your mystery birthday dinner!
                    </p>
                  </div>

                  <FestiveButton 
                    onClick={handleReveal}
                    variant="gift" 
                    className="w-full text-xl py-4"
                  >
                    🔓 Reveal My Birthday Dinner! 🍽️
                  </FestiveButton>
                </>
              )}
            </div>

            <div className="space-y-3">
              <FestiveButton 
                href="/schedule" 
                variant="activity" 
                className="w-full"
              >
                📅 Back to Schedule
              </FestiveButton>
            </div>
          </ChristmasCard>
        </main>
      </div>
    </div>
  );
}