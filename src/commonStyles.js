export const adaptiveGrid = 'grid grid-cols-1 grid-rows-auto xl:grid-cols-12';

export const selfCenter = 'self-center justify-self-center';

export const adaptiveInlineFlex = [
    selfCenter,
    'xl:justify-self-stretch xl:col-start-3 xl:col-end-11',
    'flex flex-wrap justify-around xl:flex-nowrap xl:justify-between',
].join(' ');

export const button = 'bg-1-l text-highlight rounded-2xl px-4 py-2 hover:bg-2-d';

export const hoverLink = 'hover:shadow-lg hover:underline';