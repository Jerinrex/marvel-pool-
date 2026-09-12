import constructionImg from '../assets/services/construction.png'
import infinityImg from '../assets/services/inifity pool.jpg'
import maintenanceImg from '../assets/services/Pool Maintenance Service.jpg'
import renovationImg from '../assets/services/renovation.jpg'
import equipImg from '../assets/services/equip.png'
import spaImg from '../assets/services/spa.jpg'

const services = [
  { n: '01', title: 'Swimming Pool Design', desc: "We create custom swimming pool designs that complement your property's architecture and landscape while maximizing functionality and aesthetics.", image: "https://images.unsplash.com/photo-1576610616656-d3aa5d1f4534?q=80&w=800&auto=format&fit=crop" },
  { n: '02', title: 'Swimming Pool Construction', desc: 'From excavation to finishing, we handle complete swimming pool construction using premium materials and proven engineering practices.', image: constructionImg },
  { n: '03', title: 'Infinity Pools', desc: 'Transform your property with breathtaking infinity pools that deliver a luxurious and seamless visual experience.', image: infinityImg },
  { n: '04', title: 'Residential Swimming Pools', desc: 'Beautiful backyard pools designed for relaxation, family entertainment, and modern living.', image: "https://images.unsplash.com/photo-1572331165267-854da2b10ccc?q=80&w=800&auto=format&fit=crop" },
  { n: '05', title: 'Commercial Swimming Pools', desc: 'Professional swimming pool construction for hotels, resorts, apartments, clubs, educational institutions, and sports facilities.', image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=800&auto=format&fit=crop" },
  { n: '06', title: 'Jacuzzi & Spa Pools', desc: 'Relax with customized Jacuzzi and spa solutions featuring advanced hydrotherapy systems.', image: spaImg },
  { n: '07', title: 'Pool Renovation', desc: 'Upgrade old swimming pools with modern finishes, new tiles, waterproofing, lighting, and filtration systems.', image: renovationImg },
  { n: '08', title: 'Pool Maintenance (AMC)', desc: 'Keep your pool crystal clear with cleaning, water testing, chemical balancing, equipment inspection, and preventive maintenance.', image: maintenanceImg },
  { n: '09', title: 'Pool Equipment Supply', desc: 'Supply of pool pumps, sand filters, LED lights, pool tiles, ladders, skimmers, pool chemicals, and cleaning accessories.', image: equipImg },
]

export default services
