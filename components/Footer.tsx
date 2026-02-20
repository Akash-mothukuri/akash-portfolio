import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t border-slate-900 py-10">
      <Container>
        <div className="text-sm text-slate-400">
          <div>Manchester, UK · Right to work in the UK · No sponsorship required</div>
          <div className="mt-2">© {new Date().getFullYear()} Akash Mothukuri</div>
        </div>
      </Container>
    </footer>
  );
}