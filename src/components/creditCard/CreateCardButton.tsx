export function CreateCardButton() {
  return (
    <button
      className="flex gap-4 items-center self-start px-8 py-4 mt-6 font-medium text-white bg-green-600 rounded-[64px] max-md:px-5 transition-colors duration-200 ease-in-out hover:bg-green-700 active:bg-green-800"
    >
      <span className="self-stretch my-auto">Create New Card</span>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/9fef530e97fe4035b3ccf762ae2eae01/709bfc95ef8ed9bbf8ddb3afda5c4a5e5a32eb1e04a477f8044b4b38928a94d9?apiKey=9fef530e97fe4035b3ccf762ae2eae01&"
        alt=""
        className="object-contain shrink-0 self-stretch my-auto aspect-[1.38] w-[22px]"
      />
    </button>
  );
}
