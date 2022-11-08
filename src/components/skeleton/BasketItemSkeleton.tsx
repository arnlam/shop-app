import { ImageSkeleton } from './ImageSkeleton';

export const BasketItemSkeleton = () => (
  <div role="status" className="flex flex-row space-x-3">
    <ImageSkeleton classes="aspect-square w-full h-full" />
    <div role="status" className="flex flex-col p-4 space-y-4 animate-pulse">
      <div className="h-2.5 bg-gray-300 rounded-full w-24 mb-2.5"></div>
      <div className="w-12 h-2 bg-gray-200 rounded-full"></div>
      <div className="w-32 h-2 bg-gray-200 rounded-full"></div>
    </div>
  </div>
);
