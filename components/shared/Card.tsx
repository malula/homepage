'use client'

import React, { useState, useMemo } from 'react'
import {pastEvents} from '@/constants'
import {upcomingEvents} from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import {
  CalendarDays,
  MapPin,
  Ticket
} from "lucide-react";

const ITEMS_PER_PAGE = 6

const Card = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  // Filtered events based on search query
  const filteredEvents = useMemo(() => {
    return upcomingEvents.filter((event) =>
      [event.title, event.location, event.description]
        .join(' ')
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
    )
  }, [searchQuery])

  const totalPages = Math.ceil(filteredEvents.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const paginatedEvents = filteredEvents.slice(startIndex, startIndex + ITEMS_PER_PAGE)
  const paginatedpastEvents = pastEvents.slice(startIndex, startIndex + ITEMS_PER_PAGE)

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
    setCurrentPage(1) // Reset to first page on search
  }

  const goToPrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1)
  }

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1)
  }

  return (
    <div className="p-4">
      {/* Search bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search events..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="items-center p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-400"
        />
      </div>

      {/* upcoming events Cards Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
    
        {paginatedEvents.map((event, index) => (
          
          <div
            key={index}
            className="max-w-sm w-full bg-white rounded-xl shadow-md overflow-hidden flex flex-col"
          >
            <Link href="/">
            {/* Card Image */}
            <div className="relative w-full h-56">
              <Image
                src={event.image}
                alt={event.title}
                fill
                className="object-cover rounded-t-xl"
                priority
              />
            </div>

            {/* Card Content */}
            <div className="p-6">
              <div className="flex justify-between items-start">
                <div>
                 <h2 className="text-2xl font-bold text-gray-900">{event.title}</h2>

                 
                </div>
                <span className="text-sm font-semibold rounded-full bg-gray-50 text-green-700  px-4 py-1.5">
                  Ksh {event.price.toFixed(2)}
                </span>
              </div>

              {/* Info */}
              <div className="mt-4 space-y-3 text-sm text-gray-600">
           
                <div className="flex items-center gap-2"> <MapPin className="w-4 h-4 mr-2" />
                <span> {event.location}</span>
                </div>
                <div className="flex items-center gap-2">
                     <CalendarDays className="w-4 h-4 mr-2" />
                     {event.date}  {event.time}
                </div>
                <div className="flex items-center gap-2">
                  <Ticket className="w-4 h-4 mr-2" />
                 {event.available} available</div>
              </div>

              <p className="mt-4 text-gray-600 text-sm line-clamp-2">{event.description}</p>
            </div>
            </Link>
          </div>
        ))}
      </section>


      {/* past events  Grid */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 pt-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Past Events</h1>
          <p className="mt-2 text-gray-600">
            Past &amp;  amazing events
          </p>
        </div>

         <div className="bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 text-gray-600">
            <span className="font-medium">What you missed!</span>
          </div>
        </div>
        </div>
     
     

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {paginatedpastEvents.map((event, index) => (
          <div
            key={index}
            className="max-w-sm w-full bg-white rounded-xl shadow-md overflow-hidden flex flex-col"
          >
            {/* Card Image */}
            <Link href="/">
            <div className="relative w-full h-56">
              <Image
                src={event.image}
                alt={event.title}
                fill
                className="object-cover rounded-t-xl"
                priority
              />
            </div>

            {/* Card Content */}

            <div className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">{event.title}</h2>

                  <span className="inline-block mt-2 text-xs bg-gray-100 text-gray-800 px-2 py-0.5 rounded-full">
                    Past Event
                  </span>
                </div>
                <span className="text-sm font-semibold rounded-full bg-gray-50 text-gray-500 px-4 py-1.5">
                  Ksh {event.price}
                </span>
              </div>

              {/* Info */}
              <div className="mt-4 space-y-3 text-sm text-gray-600">
           
                <div className="flex items-center gap-2"> <MapPin className="w-4 h-4 mr-2" />
                <span> {event.location}</span>
                </div>
                <div className="flex items-center gap-2">
                     <CalendarDays className="w-4 h-4 mr-2" />
                     {event.date}  {event.time}
                </div>
                <div className="flex items-center gap-2">
                  <Ticket className="w-4 h-4 mr-2" />
                 sold out</div>
              </div>

              <p className="mt-4 text-gray-600 text-sm line-clamp-2">{event.description}</p>
            </div>
            </Link>
          </div>
        ))}
      </section>

      {/* Pagination  */}
      <div className="flex justify-center items-center gap-4 mt-8">
        <button
          onClick={goToPrevPage}
          disabled={currentPage === 1}
          className="px-4 py-2 text-sm rounded bg-gray-200 hover:bg-blue-500 disabled:opacity-50"
        >
          Previous
        </button>

        <span className="text-sm font-medium">
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 text-sm rounded bg-gray-200 hover:bg-blue-500 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default Card
