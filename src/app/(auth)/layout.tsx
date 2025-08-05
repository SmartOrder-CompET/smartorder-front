export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <div className="h-screen">
            {children}

            <img 
                src="chamas.svg" 
                alt="imagem de chamas" 
                className="absolute bottom-0 w-screen"
            />
        </div>
  );
}
