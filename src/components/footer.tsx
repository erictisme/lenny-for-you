export function Footer() {
  return (
    <footer className="py-12 text-center text-sm text-muted-foreground">
      <p>
        Built by a non-coder with{" "}
        <a
          href="https://claude.ai"
          className="underline underline-offset-4 hover:text-foreground"
          target="_blank"
          rel="noopener noreferrer"
        >
          Claude Code
        </a>
      </p>
      <p className="mt-1">
        Powered by{" "}
        <a
          href="https://lennysdata.com"
          className="underline underline-offset-4 hover:text-foreground"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lenny&apos;s Newsletter
        </a>{" "}
        data
      </p>
    </footer>
  );
}
