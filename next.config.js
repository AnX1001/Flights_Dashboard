const cspHeader = `
 
    style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
 
    font-src 'self'  https://fonts.gstatic.com;  
   
    child-src https://www.youtube.com;
 
`;

module.exports = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: cspHeader.replace(/\n/g, ''),
          },
        ],
      },
    ];
  },
};
