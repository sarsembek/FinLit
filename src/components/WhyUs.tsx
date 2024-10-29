export const WhyUs: React.FC = () => {
   return (
     <main
       id="whyus"
       className="flex flex-col md:flex-row items-center justify-center w-full pt-24 px-12 lg:px-20 gap-24 max-w-7xl mx-auto"
     >
       {/* Text Section */}
       <section className="flex flex-col grow text-left text-white w-full max-w-lg">
         <h1 className="text-3xl md:text-5xl font-bold mb-4">
           Why Us?
         </h1>
         <p className="text-base md:text-md text-zinc-400 leading-relaxed">
           To inspire users on finli.ai, focus on clear value 📢, showing how your courses 📚 and calculator 💰 help with real financial challenges. Offer free trials 🆓 and demos 🎬 so users can try before committing, and share success stories 🌟 to build trust. Use personalized tips 🎯 to make it feel tailored, and post valuable content 💡 to keep your brand top of mind. Adding progress tracking 📊 or rewards 🎮 can also make the experience engaging and rewarding.
         </p>
       </section>
 
       {/* Image Section */}
       <section className="flex justify-center items-center w-full max-w-lg">
         <img src="/stack.svg" alt="Stack Icon" className="w-full h-auto object-contain" />
       </section>
     </main>
   );
 };
 