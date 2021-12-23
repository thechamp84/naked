import Navbar from './Navbar';
import Sidebar from './Sidebar';

export default function index({ children, links }) {
    return (
        <div className="relative min-h-screen bg-gray-100">
            <Navbar links={links} />
            <div className="py-10 mt-1" style={{backgroundColor: 'rgba(251, 252, 253, 1)'}}>
                <div className="max-w-4xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-10 lg:gap-8">
                    <div className="hidden lg:block lg:col-span-2">
                        <Sidebar links={links} />
                    </div>
                    <div className="lg:col-span-8">{children}</div>
                </div>
            </div>
        </div>
    );
}
