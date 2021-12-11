const sizes = {
  mobile: '475px',
  tablet: '850px',
  tabletL: '1300px',
  laptop: '1440px',
  desktop: '2560px',
};

export const device = {
  mobile: `(max-width: ${sizes.mobile})`,
  tablet: `(max-width: ${sizes.tablet})`,
  tabletL: `(max-width: ${sizes.tabletL})`,
  laptop: `(max-width: ${sizes.laptop})`,
  desktop: `(max-width: ${sizes.desktop})`,
};

export default device;
