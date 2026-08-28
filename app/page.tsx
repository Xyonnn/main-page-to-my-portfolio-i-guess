import Footer from "./components/footerComponents/footer";
import Navbar from "./components/navbarComponents/navbar";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-900 text-white">
        <Navbar></Navbar>
        <Footer></Footer>
    </div>
  );
}
