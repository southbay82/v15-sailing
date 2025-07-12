export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 mt-12">
      <div className="container mx-auto px-4 py-6 text-center text-sm">
        © {new Date().getFullYear()} V-15 Sailing. All rights reserved.
      </div>
    </footer>
  );
}
