'use client'

import { useState } from 'react';
import { ChristmasCard, FestiveButton, FestiveTitle } from '../components/FestiveComponents';
import Snowfall from '../components/Snowfall';

const activities = [
  {
    id: 1,
    emoji: '🎠',
    title: 'Ride Challenge',
    description: 'Try the most thrilling ride',
    reward: 'I buy the next ride of your choice! 🎢',
    completed: false
  },
  {
    id: 2,
    emoji: '🍭',
    title: 'Sweet Tooth Quest',
    description: 'Spot the most festive chocolate stall',
    reward: 'Unlimited chocolate budget! 🍫',
    completed: false
  },
  {
    id: 3,
    emoji: '📸',
    title: 'Photo Mission',
    description: 'Take a selfie with the biggest Christmas tree',
    reward: 'You choose our next 2 photo spots! 📷',
    completed: false
  },
  {
    id: 4,
    emoji: '🎯',
    title: 'Game Master',
    description: 'Win any fairground game together',
    reward: 'I carry your prize the whole day! 🧸',
    completed: false
  },
  {
    id: 5,
    emoji: '☕',
    title: 'Hot Chocolate Hunt',
    description: 'Find the coziest hot chocolate stand',
    reward: 'Hot chocolates are on me all day! ☕',
    completed: false
  },
  {
    id: 6,
    emoji: '🎪',
    title: 'Adventure Choice',
    description: 'Pick any attraction that catches your eye',
    reward: 'You decide our next 2 activities! ✨',
    completed: false
  },
  {
    id: 7,
    emoji: '🎁',
    title: 'Surprise Discovery',
    description: 'Find something that makes you smile',
    reward: 'Mini surprise gift unlocked! 🎀',
    completed: false
  },
  {
    id: 8,
    emoji: '❄️',
    title: 'Winter Wonder',
    description: 'Experience the most "winter wonderland" moment',
    reward: 'You choose how we end our time here! 🌟',
    completed: false
  }
];

export default function WinterWonderlandPage() {
  const [completedActivities, setCompletedActivities] = useState<number[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<number | null>(null);

  const completeActivity = (activityId: number) => {
    if (!completedActivities.includes(activityId)) {
      setCompletedActivities([...completedActivities, activityId]);
    }
    setSelectedActivity(null);
  };

  const resetActivity = (activityId: number) => {
    setCompletedActivities(completedActivities.filter(id => id !== activityId));
  };

  const selectActivity = (activityId: number) => {
    setSelectedActivity(selectedActivity === activityId ? null : activityId);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <Snowfall />
      
      <div className="relative z-10 min-h-screen p-2 sm:p-4 py-4 sm:py-8">
        <main className="w-full max-w-6xl mx-auto">
          <ChristmasCard className="text-center mb-6 sm:mb-8">
            <FestiveTitle className="text-3xl sm:text-4xl md:text-5xl">
              Winter Wonderland Adventures! ❄️
            </FestiveTitle>
            
            <div className="space-y-4 mb-6">
              <div className="bg-blue-50 p-4 rounded-xl border-2 border-blue-200">
                <p className="text-lg font-medium text-blue-800">
                  🕐 <strong>1:30 PM - Winter Wonderland Time!</strong>
                </p>
                <p className="text-blue-600 mt-1">
                  Choose activities and complete mini-challenges to unlock special rewards! 
                  You can do them in any order you want. ✨
                </p>
              </div>

              <div className="flex justify-center items-center gap-4 text-sm">
                <div className="bg-green-100 px-3 py-1 rounded-full border border-green-300">
                  <span className="text-green-700">✅ Completed: {completedActivities.length}</span>
                </div>
                <div className="bg-pink-100 px-3 py-1 rounded-full border border-pink-300">
                  <span className="text-pink-700">🎯 Available: {activities.length - completedActivities.length}</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
              {activities.map((activity) => {
                const isCompleted = completedActivities.includes(activity.id);
                const isSelected = selectedActivity === activity.id;
                
                return (
                  <div
                    key={activity.id}
                    className={`
                      relative p-4 sm:p-4 rounded-xl border-2 transition-all duration-200 cursor-pointer min-h-[180px]
                      ${isCompleted 
                        ? 'bg-linear-to-br from-green-100 to-green-50 border-green-400' 
                        : isSelected
                        ? 'bg-linear-to-br from-pink-100 to-pink-50 border-pink-400 transform scale-105'
                        : 'bg-white border-gray-200 hover:border-pink-300 hover:shadow-md'
                      }
                    `}
                    onClick={() => selectActivity(activity.id)}
                  >
                    {isCompleted && (
                      <div className="absolute top-2 right-2 text-green-600 text-xl">
                        ✅
                      </div>
                    )}
                    
                    <div className="text-3xl mb-2">{activity.emoji}</div>
                    <h3 className="festive-text text-lg font-semibold text-gray-800 mb-2">
                      {activity.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      {activity.description}
                    </p>
                    
                    <div className="bg-yellow-50 p-2 rounded-lg border border-yellow-200 mb-3">
                      <p className="text-xs text-yellow-800 font-medium">
                        🏆 Reward: {activity.reward}
                      </p>
                    </div>

                    {isSelected && !isCompleted && (
                      <div className="space-y-2">
                        <FestiveButton 
                          onClick={() => completeActivity(activity.id)}
                          variant="activity" 
                          className="w-full text-sm py-2"
                        >
                          ✅ Mark Complete!
                        </FestiveButton>
                      </div>
                    )}

                    {isCompleted && (
                      <div className="space-y-2">
                        <div className="text-green-600 font-bold text-sm">
                          🎉 Completed! Reward Unlocked!
                        </div>
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            resetActivity(activity.id);
                          }}
                          className="text-xs text-gray-500 hover:text-gray-700 underline"
                        >
                          Reset
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {completedActivities.length > 0 && (
              <div className="bg-linear-to-r from-pink-100 to-red-100 p-6 rounded-xl border-2 border-pink-300 mb-6">
                <h3 className="festive-text text-2xl font-semibold text-red-700 mb-3">
                  🎊 Your Unlocked Rewards! 
                </h3>
                <div className="space-y-2 text-left">
                  {activities
                    .filter(activity => completedActivities.includes(activity.id))
                    .map(activity => (
                      <div key={activity.id} className="flex items-start gap-3">
                        <span className="text-lg">{activity.emoji}</span>
                        <span className="text-sm text-gray-700">{activity.reward}</span>
                      </div>
                    ))}
                </div>
              </div>
            )}

            <div className="space-y-3">
              <FestiveButton 
                href="/schedule" 
                variant="activity" 
                className="w-full text-lg py-3"
              >
                📅 Check Schedule & Next Steps
              </FestiveButton>
            </div>
          </ChristmasCard>
        </main>
      </div>
    </div>
  );
}