import Footer from '@/components/footer';
import Menu from '@/components/ui/menu';
import { useParams } from 'react-router-dom';

// Define the shape of your content data
type ReferencesData = {
  title: string;
  description: string;
  tools: string;
};

// Map each URL slug to its specific content
const ReferencesContent: Record<string, ReferencesData> = {
  materials: {
    title: 'Materials',
    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
    tools: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
  },
  modeling: {
    title: '3D Modeling',
    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
    tools: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
  },
  frontend: {
    title: 'Frontend Development',
    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
    tools: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
  },
};

export const images = [
	{
		label: "Home",
    description: "Home",
		href: "#",
	},
	{
		label: "About",
    description: "About",
		href: "#",
	},
	{
		label: "Contact",
    description: "Contact",
		href: "#",
	},
	{
		label: "References",
    description: "References",
		href: "#",
	},
  {
		label: "Contact",
    description: "Contact",
		href: "#",
	},
	{
		label: "References",
    description: "References",
		href: "#",
	},
];

export function ReferencesPage() {
  // Grab the dynamic parameter from the URL (e.g., "materials" or "modeling")
  const { References } = useParams<{ References: string }>();

  // Fallback or safety check if someone types a random URL
  const data = References ? ReferencesContent[References] : undefined;

  if (!data) {
    return <div className="p-10 text-xl">Page not found!</div>;
  }

  return (
    <div className='h-[calc(100vh-64px)]'>
      <Menu/>
      <div className='grid h-full grid-cols-4'>
        <div className='p-16'>
          <h1 className="font-heading text-[96px] uppercase">{data.title}</h1>
          <div className='mt-20 text-white'>
            <div className="text-md font-light">Description</div>
            <p className="text-lg font-thin">{data.description}</p>
          </div>
          <div className='mt-20 text-white'>
            <div className="text-md font-light">Tools I use</div>
            <p className="text-lg font-thin">{data.tools}</p>
          </div>
        </div>
        <div className='col-span-3 bg-card p-16 flex flex-col justify-end items-center'>
          <div className='grid grid-cols-2 gap-5'>
            
            {images.map((item) => (
                <div className='bg-gray-400 size-full w-130 aspect-video'></div>
              ))}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}