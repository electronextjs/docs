import Image from 'next/image'
export const Logo = () => {

  return(<>
    <div style={{
      display: 'flex',
      alignItems: 'center',
    }}>
      <Image src="/electronext.logo.animated.svg" width={50} height={50} />
      <div style={{
          display: 'flex',
          flexDirection: 'column',
          fontSize: '1.3rem'
        }}>
        <span>ElectroNext.js</span>
{/*         <span style={{
          fontSize: '0.85rem',
          opacity: 0.4,
        }}>Electron App Example with Next + Typescript</span> */}
      </div>
    </div>
  </>)
}