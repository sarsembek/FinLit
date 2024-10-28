const VideoGallery = () => {
   const videos = [
     {
       title: "Financial Literacy for Kids",
       url: "https://www.youtube.com/embed/0iRbD5rM5qc",
     },
     {
       title: "The Basics of Investing",
       url: "https://www.youtube.com/embed/qIw-yFC-HNU",
     },
   ];
 
   return (
     <div className="flex flex-col sm:flex-row gap-8 justify-center items-stretch px-12 mt-24 my-12 w-full md:px-24">
       {videos.map((video, index) => (
         <div
           key={index}
           className="video-card flex flex-col p-6 bg-zinc-800 rounded-lg shadow-lg text-white w-full sm:w-3/4 max-w-screen-lg"
           style={{ height: '400px' }} // Adjusted height to balance the aspect ratio
         >
           <h3 className="text-xl sm:text-2xl font-semibold mb-4">{video.title}</h3>
           <iframe
             className="rounded-lg w-full flex-grow"
             style={{ height: 'calc(100% - 80px)' }} // Dynamic iframe height based on container height
             src={video.url}
             title={video.title}
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
             allowFullScreen
           />
         </div>
       ))}
     </div>
   );
 };
 
 export default VideoGallery;
 