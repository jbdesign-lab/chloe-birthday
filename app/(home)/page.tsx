import { ChristmasCard, FestiveButton, FestiveTitle } from '../components/FestiveComponents';
import Snowfall from '../components/Snowfall';

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <Snowfall />
      
      <div className="relative z-10 flex min-h-screen items-center justify-center p-2 sm:p-4">
        <main className="w-full max-w-2xl">
          <ChristmasCard className="text-center sparkle">
            <div className="space-y-4 sm:space-y-6">
              <div className="text-6xl mb-4">🎄🎁</div>
              
              <FestiveTitle>
                Happy Birthday, Beautiful! 🎂
              </FestiveTitle>
              
              <div className="space-y-4 text-lg text-gray-700">
                <p className="font-medium">
                  Welcome to your very special 'Choose Your Own Adventure' Birthday! 
                </p>
                <p>
                  I've planned an amazing day filled with surprises, gifts, and special moments. 
                  You get to make the choices and create your perfect birthday experience! 🌟
                </p>
              </div>

              <div className="bg-red-50 p-6 rounded-xl border-2 border-red-200 my-6">
                <h3 className="festive-text text-2xl font-semibold text-red-700 mb-3">
                  Your Birthday Schedule ✨
                </h3>
                <div className="space-y-2 text-left">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🌅</span>
                    <span><strong>Morning:</strong> Choose your gifts to open</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">❄️</span>
                    <span><strong>1:30 PM:</strong> Winter Wonderland adventure</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🍽️</span>
                    <span><strong>7:00 PM:</strong> Mystery dinner (reveal after 5pm) </span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <FestiveButton 
                  href="/gifts" 
                  variant="gift" 
                  className="w-full text-lg sm:text-xl py-4"
                >
                  🎁 Start Your Birthday Adventure! 🎁
                </FestiveButton>
                
                <FestiveButton 
                  href="/schedule" 
                  variant="activity" 
                  className="w-full py-3"
                >
                  📅 View Full Schedule
                </FestiveButton>
              </div>

              <div className="text-sm text-gray-600 mt-6">
                <p className="festive-text text-lg text-pink-600">
                  Made with love just for you ❤️
                </p>
              </div>
            </div>
          </ChristmasCard>
        </main>
      </div>
    </div>
  );
}
