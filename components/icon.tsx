export type IconProps = React.HTMLAttributes<SVGElement>;

export const Icon = {
  chart: (props: IconProps) => (
    <svg
      width='430'
      height='431'
      viewBox='0 0 430 431'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M150 375.5V245.5H80V375.5'
        stroke='#DDFF00FF'
        stroke-width='12'
        stroke-linejoin='round'
      />
      <path
        d='M250 375.5V140.5H180V375.5'
        stroke='#DDFF00'
        stroke-width='12'
        stroke-linejoin='round'
      />
      <path
        d='M350 375.5V55.5H280V375.5'
        stroke='#DDFF00'
        stroke-width='12'
        stroke-linejoin='round'
      />
      <path
        d='M375 375.5H55'
        stroke='#DDFF00'
        stroke-width='12'
        stroke-miterlimit='14.8'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  ),
};
