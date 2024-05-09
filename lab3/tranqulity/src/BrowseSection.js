// BrowseSection.js
import React from 'react';
import HotelCard from './HotelCard';

function BrowseSection() {
  return (
    <section id="browse" className="browse-section">
      <p className="title-middle">Explore the hotels</p>
      <input className="searchbar" placeholder="Search by hotel name, place etc." />
      <section className="grid hotel-cards">
      <HotelCard location="Florence" name="Harmony Hideaway Hotel" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus quis felis a venenatis. Suspendisse accumsan aliquam lorem, sit amet ultricies justo tristique nec." rating="★★★★★" price="100€" heart={<svg width="20" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22 7.15533C22 8.77914 21.3765 10.3388 20.2631 11.4925C17.7001 14.1492 15.2143 16.9194 12.5556 19.4797C11.9461 20.058 10.9794 20.0369 10.3962 19.4324L2.73645 11.4925C0.421185 9.09256 0.421185 5.21809 2.73645 2.81815C5.07446 0.394622 8.88333 0.394622 11.2213 2.81815L11.4998 3.10674L11.778 2.81832C12.899 1.65573 14.4257 1 16.0206 1C17.6154 1 19.142 1.65566 20.2631 2.81815C21.3766 3.97197 22 5.53156 22 7.15533Z" fill="#50614A" stroke="#50614A" stroke-width="2" stroke-linejoin="round"/>
                            </svg>   }/>
        <HotelCard location="Madrid" name="Serene Retreat" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus quis felis a venenatis. Suspendisse accumsan aliquam lorem, sit amet ultricies justo tristique nec." rating="★★★★☆" price="70€" heart={ <svg width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22 7.15533C22 8.77914 21.3765 10.3388 20.2631 11.4925C17.7001 14.1492 15.2143 16.9194 12.5556 19.4797C11.9461 20.058 10.9794 20.0369 10.3962 19.4324L2.73645 11.4925C0.421185 9.09256 0.421185 5.21809 2.73645 2.81815C5.07446 0.394622 8.88333 0.394622 11.2213 2.81815L11.4998 3.10674L11.778 2.81832C12.899 1.65573 14.4257 1 16.0206 1C17.6154 1 19.142 1.65566 20.2631 2.81815C21.3766 3.97197 22 5.53156 22 7.15533Z" stroke="#50614A" stroke-width="2" stroke-linejoin="round"/>
                            </svg>}/>
        <HotelCard location="Sintra" name="Palm Springs" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus quis felis a venenatis. Suspendisse accumsan aliquam lorem, sit amet ultricies justo tristique nec." rating="★★★★☆" price="65€" heart={ <svg width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22 7.15533C22 8.77914 21.3765 10.3388 20.2631 11.4925C17.7001 14.1492 15.2143 16.9194 12.5556 19.4797C11.9461 20.058 10.9794 20.0369 10.3962 19.4324L2.73645 11.4925C0.421185 9.09256 0.421185 5.21809 2.73645 2.81815C5.07446 0.394622 8.88333 0.394622 11.2213 2.81815L11.4998 3.10674L11.778 2.81832C12.899 1.65573 14.4257 1 16.0206 1C17.6154 1 19.142 1.65566 20.2631 2.81815C21.3766 3.97197 22 5.53156 22 7.15533Z" stroke="#50614A" stroke-width="2" stroke-linejoin="round"/>
                            </svg>}/>
        <HotelCard location="Sienna" name="Oasis Resort" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus quis felis a venenatis. Suspendisse accumsan aliquam lorem, sit amet ultricies justo tristique nec." rating="★★★★★" price="115€" heart={<svg width="20" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22 7.15533C22 8.77914 21.3765 10.3388 20.2631 11.4925C17.7001 14.1492 15.2143 16.9194 12.5556 19.4797C11.9461 20.058 10.9794 20.0369 10.3962 19.4324L2.73645 11.4925C0.421185 9.09256 0.421185 5.21809 2.73645 2.81815C5.07446 0.394622 8.88333 0.394622 11.2213 2.81815L11.4998 3.10674L11.778 2.81832C12.899 1.65573 14.4257 1 16.0206 1C17.6154 1 19.142 1.65566 20.2631 2.81815C21.3766 3.97197 22 5.53156 22 7.15533Z" fill="#50614A" stroke="#50614A" stroke-width="2" stroke-linejoin="round"/>
                            </svg>   }/>
      </section>
    </section>
  );
}

export default BrowseSection;
