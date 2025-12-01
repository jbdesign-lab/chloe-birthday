'use client'

import { useState } from 'react';
import { ChristmasCard, FestiveButton, FestiveTitle } from '../components/FestiveComponents';
import Snowfall from '../components/Snowfall';

const gifts = [
  { 
    id: 1, 
    emoji: '🎁', 
    name: 'Mystery Gift #1',
  },
  { 
    id: 2, 
    emoji: '🎀', 
    name: 'Mystery Gift #2',  
  },
  { 
    id: 3, 
    emoji: '🎊', 
    name: 'Mystery Gift #3',
  },
  { 
    id: 4, 
    emoji: '🌟', 
    name: 'Mystery Gift #4',
  },
  { 
    id: 5, 
    emoji: '💖', 
    name: 'Mystery Gift #5'
  },
  { 
    id: 6, 
    emoji: '🎉', 
    name: 'Mystery Gift #6'
  }
];

export default function GiftsPage() {
  const [selectedGifts, setSelectedGifts] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);

  const handleGiftSelection = (giftId: number) => {
    if (selectedGifts.includes(giftId)) {
      // Remove if already selected
      setSelectedGifts(selectedGifts.filter(id => id !== giftId));
    } else if (selectedGifts.length < 2) {
      // Add if less than 2 selected
      setSelectedGifts([...selectedGifts, giftId]);
    }
  };

  const confirmSelection = () => {
    if (selectedGifts.length === 2) {
      setShowResults(true);
    }
  };

  if (showResults) {
    const selectedGiftItems = gifts.filter(gift => selectedGifts.includes(gift.id));
    
    return (
      <div className="min-h-screen relative overflow-hidden">
        <Snowfall />
        
        <div className="relative z-10 flex min-h-screen items-center justify-center p-4">
          <main className="w-full max-w-2xl">
            <ChristmasCard className="text-center">
              <FestiveTitle>
                Your Chosen Gifts! 🎁
              </FestiveTitle>
              
              <div className="space-y-6 mb-8">
                <p className="text-lg font-medium text-gray-700">
                  Congratulations! You've chosen your mystery birthday gifts:
                </p>
                
                <div className="grid gap-4 md:grid-cols-2">
                  {selectedGiftItems.map((gift) => (
                    <div 
                      key={gift.id} 
                      className="bg-linear-to-br from-pink-100 to-red-100 p-6 rounded-xl border-2 border-pink-300"
                    >
                      <div className="text-4xl mb-2">{gift.emoji}</div>
                      <h3 className="festive-text text-xl font-semibold text-red-700 mb-2">
                        {gift.name}
                      </h3>
                    </div>
                  ))}
                </div>
                
                <div className="bg-green-50 p-4 rounded-xl border-2 border-green-200">
                  <p className="text-green-800 font-medium">
                    🎉 These mystery gifts are waiting for you to unwrap! 
                    The surprises inside will remain secret until you open them... 
                    Now let's continue with the rest of the schedule! ✨
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                
                <FestiveButton 
                  onClick={() => {
                    setSelectedGifts([]);
                    setShowResults(false);
                  }}
                  variant="gift" 
                  className="w-full"
                >
                  🎁 Choose Different Gifts
                </FestiveButton>

                <FestiveButton 
                  href="/schedule" 
                  variant="activity" 
                  className="w-full text-lg py-3"
                >
                  ✨ Continue to Your Day's Schedule
                </FestiveButton>

              </div>
            </ChristmasCard>
          </main>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      <Snowfall />
      
      <div className="relative z-10 flex min-h-screen items-center justify-center p-2 sm:p-4 py-4">
        <main className="w-full max-w-4xl">
          <ChristmasCard className="text-center">
            <FestiveTitle>
              Choose Your Birthday Gifts! 🎁
            </FestiveTitle>
            
            <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
              <div className="bg-pink-50 p-4 rounded-xl border-2 border-pink-200">
                <p className="text-lg font-medium text-pink-800">
                  Pick any <strong>2 numbers</strong> from 1-6 to choose which gifts you can open today! 🎉
                </p>
                <p className="text-sm text-pink-600 mt-2">
                  Selected: {selectedGifts.length}/2
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                {gifts.map((gift) => {
                  const isSelected = selectedGifts.includes(gift.id);
                  const isDisabled = !isSelected && selectedGifts.length >= 2;
                  
                  return (
                    <button
                      key={gift.id}
                      onClick={() => handleGiftSelection(gift.id)}
                      disabled={isDisabled}
                      className={`
                        p-4 sm:p-6 rounded-xl border-2 transition-all duration-200 transform min-h-[140px] sm:min-h-auto
                        ${isSelected 
                          ? 'bg-linear-to-br from-red-100 to-pink-100 border-red-400 scale-105 shadow-lg' 
                          : isDisabled 
                          ? 'bg-gray-100 border-gray-200 opacity-50 cursor-not-allowed'
                          : 'bg-white border-pink-200 hover:border-pink-400 hover:scale-102 hover:shadow-md cursor-pointer'
                        }
                      `}
                    >
                      <div className="text-4xl mb-3">{gift.emoji}</div>
                      <div className="text-2xl font-bold text-red-600 mb-2">{gift.id}</div>
                      <h3 className="festive-text text-lg font-semibold text-gray-800 mb-1">
                        {gift.name}
                      </h3>
                      
                      {isSelected && (
                        <div className="mt-2 text-red-600 font-bold">✓ Selected!</div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="space-y-3">
              <FestiveButton 
                onClick={confirmSelection}
                variant="gift" 
                className="w-full text-xl py-4"
                disabled={selectedGifts.length !== 2}
              >
                {selectedGifts.length === 2 
                  ? '🎁 Confirm My Gift Selection!' 
                  : `🎁 Select ${2 - selectedGifts.length} More Gift${selectedGifts.length === 1 ? '' : 's'}`
                }
              </FestiveButton>

              <FestiveButton 
                href="/" 
                variant="activity" 
                className="w-full"
              >
                🏠 Back to Home
              </FestiveButton>
            </div>
          </ChristmasCard>
        </main>
      </div>
    </div>
  );
}