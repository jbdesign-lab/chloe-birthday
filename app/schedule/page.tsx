'use client'

import { ChristmasCard, FestiveButton, FestiveTitle } from '../components/FestiveComponents';
import Snowfall from '../components/Snowfall';

const scheduleItems = [
  {
    time: 'Morning',
    emoji: '🌅',
    title: 'Birthday Gift Selection',
    description: 'Choose 2 special gifts to unwrap and start your day with surprises!',
    location: 'Home 🏠',
    status: 'ready',
    link: '/gifts'
  },
  {
    time: '1:30 PM',
    emoji: '❄️',
    title: 'Winter Wonderland Adventure',
    description: 'Magical winter activities, mini-challenges, and festive fun together!',
    location: 'Winter Wonderland, London 🎪',
    status: 'booked',
    link: '/winter-wonderland'
  },
  {
    time: '7:00 PM - 9:00 PM',
    emoji: '🍽️',
    title: 'Mystery Birthday Dinner',
    description: 'A special culinary surprise awaits... but you must wait until 5 PM to reveal it! 🤫',
    location: 'Secret Location 🔒',
    status: 'mystery-dinner',
    link: '/dinner-reveal'
  }
];

export default function SchedulePage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <Snowfall />
      
      <div className="relative z-10 min-h-screen p-2 sm:p-4 py-4 sm:py-8">
        <main className="w-full max-w-4xl mx-auto">
          <ChristmasCard className="text-center mb-6 sm:mb-8">
            <FestiveTitle className="text-3xl sm:text-4xl md:text-5xl">
              Your Birthday Schedule! 🎂
            </FestiveTitle>
            
            <div className="space-y-4 mb-8">
              <div className="bg-pink-50 p-4 rounded-xl border-2 border-pink-200">
                <p className="text-lg font-medium text-pink-800">
                  🎉 <strong>Happy Birthday, Smelly!</strong>
                </p>
                <p className="text-pink-600 mt-1">
                  I have planned your day with love and surprises at every turn! ✨
                </p>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
              {scheduleItems.map((item, index) => (
                <div 
                  key={index}
                  className={`
                    relative p-4 sm:p-6 rounded-xl border-2 text-left
                    ${item.status === 'ready' 
                      ? 'bg-linear-to-r from-green-50 to-green-100 border-green-300' 
                      : item.status === 'booked'
                      ? 'bg-linear-to-r from-blue-50 to-blue-100 border-blue-300'
                      : item.status === 'mystery'
                      ? 'bg-linear-to-r from-purple-50 to-purple-100 border-purple-300'
                      : item.status === 'mystery-dinner'
                      ? 'bg-linear-to-r from-orange-50 to-orange-100 border-orange-300'
                      : 'bg-white border-gray-200'
                    }
                  `}
                >
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">{item.emoji}</div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="bg-white px-3 py-1 rounded-full text-sm font-bold text-gray-700 border">
                          {item.time}
                        </span>
                        {item.status === 'booked' && (
                          <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-bold">
                            ✅ BOOKED
                          </span>
                        )}
                        {item.status === 'ready' && (
                          <span className="bg-green-600 text-white px-2 py-1 rounded-full text-xs font-bold">
                            🎯 READY
                          </span>
                        )}
                        {item.status === 'mystery' && (
                          <span className="bg-purple-600 text-white px-2 py-1 rounded-full text-xs font-bold">
                            🔮 MYSTERY
                          </span>
                        )}
                        {item.status === 'mystery-dinner' && (
                          <span className="bg-orange-600 text-white px-2 py-1 rounded-full text-xs font-bold">
                            🍽️ LOCKED UNTIL 5PM
                          </span>
                        )}
                      </div>
                      
                      <h3 className="festive-text text-2xl font-semibold text-gray-800 mb-2">
                        {item.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-3">
                        {item.description}
                      </p>
                      
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-sm font-medium text-gray-500">📍</span>
                        <span className="text-sm text-gray-600">{item.location}</span>
                      </div>

                      {item.link && (
                        <FestiveButton 
                          href={item.link}
                          variant={item.status === 'ready' ? 'gift' : 'activity'}
                          className="mt-2"
                        >
                          {item.status === 'ready' ? '🎁 Start Now!' : 
                           item.status === 'mystery-dinner' ? '🔓 Reveal Dinner (Available 5PM+)' :
                           '🎪 Explore Activities'}
                        </FestiveButton>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-yellow-50 p-6 rounded-xl border-2 border-yellow-200 mb-8">
              <h3 className="festive-text text-2xl font-semibold text-yellow-800 mb-3">
                💡 Birthday Tips & Notes
              </h3>
              <div className="space-y-2 text-left text-sm text-yellow-700">
                <p>• 🎁 Start with your gift selection whenever you're ready!</p>
                <p>• ❄️ Winter Wonderland: Dress warm and comfy for outdoor activities</p>
                <p>• 🍽️ ROKA Mayfair: Smart casual dress code (but you always look amazing!)</p>
              </div>
            </div>

            <div className="space-y-3 sm:space-y-4">
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