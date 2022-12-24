interface layout {
  children: React.ReactNode;
  text?: string | undefined;
}

const RootLayout: React.FC<layout> = ({ children, text }) => {
  return (
    <html>
      <head>{text}</head>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
