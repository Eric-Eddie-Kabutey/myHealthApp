'use client';

import Image from "next/image";
import { AppleAppBadge, gambiaBlack, GoogleAppBadge, mobilePresent } from "../assets/images";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Hero from "@/components/Hero";
import Link from "next/link";
import { heroMedia } from "./leadership/heroMedia";
import PageWrapper from "@/components/PageWrapper";


export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [playTestimonial, setPlayTestimonial] = useState(false);


  return <main className="w-full flex flex-col gap-4">
    <Hero className="md:h-[670px] h-[400px]" />
    <div className="w-full flex flex-col items-center bg-white z-10 px-4">

      <section className="w-full py-[2rem] flex flex-col items-center">
        <span className="text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] leading-tight md:leading-[3.3rem] w-full max-w-[800px] text-center px-4">
          Your complete solution for
          <span className="text-emerald-500 font-semibold">
            physical and mental
          </span>
          health—supporting patients,
          <span className="text-blue-500 font-semibold">
            clinicians
          </span>, and
          <span className="text-purple-500 font-semibold">hospitals</span>, all in one platform.
        </span>
      </section>

      <section className="w-full py-[2rem] flex flex-col items-center">
        <div className="w-full xl:w-[1200px] flex lg:justify-center gap-10 overflow-x-auto">
          <aside className="min-w-[300px] sm:w-[350px] group rounded-[2rem] bg-white shadow border-t flex flex-col justify-end relative h-[350px] md:h-[450px] overflow-hidden">
            <img src="https://www.shutterstock.com/image-photo/doctors-talking-operation-600nw-2451099677.jpg" alt="clinicians" className="w-full h-[200px] object-cover group-hover:scale-105 transition-all duration-300" />
            <div className="absolute cursor-pointer size-full top-0 left-0 p-4 sm:p-7 sm:py-12 pb-7 flex flex-col justify-between transition-all duration-300">
              <div className="flex flex-col gap-2">
                <b className="text-base sm:text-lg text-purple-900 flex items-center gap-2"><div className="size-2 rounded-full bg-black" />For Clinicians</b>
                <p className="text-slate-700 text-[1.5rem] sm:text-[2rem] leading-[1.7rem] sm:leading-[2.3rem] font-bold">Exceptional Care Begins with RiciaCare</p>
              </div>
              <Button variant={'outline'} className="px-[1rem] rounded-[2rem] w-fit h-10 mt-2 text-black bg-white transition-all duration-500 border-2 border-white group flex items-center gap-2">
                <div className="size-[0.4rem] bg-black rounded-full animate-ping transition-all duration-300" />
                Join the team
              </Button>
            </div>
          </aside>
          <aside className="min-w-[300px] sm:w-[350px] group rounded-[2rem] bg-white shadow border-t flex flex-col justify-end relative h-[350px] md:h-[450px] overflow-hidden">
            <img src="https://media.istockphoto.com/id/1276732125/photo/african-american-video-conferencing-with-doctor.jpg?s=612x612&w=0&k=20&c=d-NzHONUc7RDxhkEOWEcxQcTdLzL7wCsUCMutjrlco4=" alt="clinicians" className="w-full h-[200px] object-cover group-hover:scale-105 transition-all duration-300" />
            <div className="absolute cursor-pointer size-full top-0 left-0 p-4 sm:p-7 sm:py-12 pb-7 flex flex-col justify-between transition-all duration-300">
              <div className="flex flex-col gap-2">
                <b className="text-base sm:text-lg text-purple-900 flex items-center gap-2"><div className="size-2 rounded-full bg-black" />For Individuals</b>
                <p className="text-slate-700 text-[1.5rem] sm:text-[2rem] leading-[1.7rem] sm:leading-[2.3rem] font-bold">Anytime, anywhere, anything care</p>
              </div>
              <Button variant={'outline'} className="px-[1rem] rounded-[2rem] w-fit h-10 mt-2 text-black bg-white transition-all duration-500 border-2 border-white group flex items-center gap-2">
                <div className="size-[0.4rem] bg-black rounded-full animate-ping transition-all duration-300" />
                Get care now
              </Button>
            </div>
          </aside>
          <aside className="min-w-[300px] sm:w-[350px] group rounded-[2rem] bg-white shadow border-t flex flex-col justify-end relative h-[350px] md:h-[450px] overflow-hidden">
            <img src="https://www.shutterstock.com/image-photo/healthcare-worker-talking-patient-through-600nw-2446150243.jpg" alt="clinicians" className="w-full h-[200px] object-cover group-hover:scale-105 transition-all duration-300" />
            <div className="absolute cursor-pointer size-full top-0 left-0 p-4 sm:p-7 sm:py-12 pb-7 flex flex-col justify-between transition-all duration-300">
              <div className="flex flex-col gap-2">
                <b className="text-base sm:text-lg text-purple-900 flex items-center gap-2"><div className="size-2 rounded-full bg-black" />For Organizations</b>
                <p className="text-slate-700 text-[1.5rem] sm:text-[2rem] leading-[1.7rem] sm:leading-[2.3rem] font-bold">From hospital to home comfortably</p>
              </div>
              <Button variant={'outline'} className="px-[1rem] rounded-[2rem] w-fit h-10 mt-2 text-black bg-white transition-all duration-500 border-2 border-white group flex items-center gap-2">
                <div className="size-[0.4rem] bg-black rounded-full animate-ping transition-all duration-300" />
                Ways we can help
              </Button>
            </div>
          </aside>
        </div>
      </section>

      <section className="w-full flex flex-col items-center py-[4rem]">
        <div className="xl:w-[1200px] flex flex-col items-center text-center">
          <b className="text-[1.5rem] md:text-[2rem] md:leading-[3rem]">A High-Quality Care Experience-Anywhere, Anytime</b>
          <p className="w-full md:w-md">It started with a simple yet revolutionary idea. That everyone should have access to the best healthcare anywhere in the world on their terms. That includes you.</p>
          <br />
          <Link href={`/about`}>
            <Button variant={`outline`} className="rounded-2xl h-12 px-[3rem]">About Us</Button>
          </Link>
          <br /><br />

          <div className="w-full flex flex-col md:flex-row gap-4 h-auto md:h-[600px]">
            {/* left section */}
            <aside className="flex-1 flex flex-col gap-4 min-w-0">
              <div className="w-full rounded-2xl shadow h-[200px] lg:h-full overflow-hidden">
                <video src={heroMedia[0]} playsInline autoPlay muted loop className="size-full object-cover" />
              </div>
              <div className="w-full rounded-2xl shadow bg-blue-500 text-white min-h-[100px] lg:min-h-[200px] overflow-hidden flex flex-col p-5 text-left">
                <b className="text-2xl lg:text-4xl leading-2rem">#1</b>
                Most recognized virtual care brand. *
              </div>
            </aside>
            {/* middle section */}
            <aside className="flex-[2] min-w-0 flex flex-col gap-4">
              <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 h-auto lg:h-[30%]">
                <div className="size-full shadow rounded-[2rem] p-5 flex flex-col justify-center text-left border-[0.5rem] border-black">
                  <b className="text-2xl lg:text-4xl leading-2rem ">+90%</b>
                  Member satisfaction
                </div>
                <div className="size-full shadow rounded-2xl overflow-hidden">
                  <img src="https://www.med.ubc.ca/files/2021/02/Virtual-Health-Care-Webinar-1000x600-1.jpg" alt="" className="size-full object-cover" />
                </div>
              </div>
              <div className="w-full h-[200px] md:h-[300px] lg:h-[40%] flex-1 shadow rounded-2xl overflow-hidden flex flex-col text-left">
                <iframe className="size-full object-cover" src="https://www.youtube.com/embed/HVF0273iHus" title="Compassion, dignity and respect in health care" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" />
              </div>
              <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 h-auto lg:h-[30%]">
                <div className="size-full shadow rounded-2xl overflow-hidden flex flex-col justify-center text-left">
                  <img src="https://www.childrenshomecare.net/wp-content/uploads/2020/10/CH6-1024x683.jpg" alt="" className="size-full object-cover" />
                </div>
                <div className="size-full shadow rounded-2xl p-5 flex flex-col text-left justify-center">
                  Prioritizing the best virtual care
                  <b className="text-lg lg:text-2xl leading-[1.5rem] text-emerald-600">patient safety organization</b>
                </div>
              </div>
            </aside>
            {/* right section */}
            <aside className="flex-1 flex flex-col gap-4 min-w-0">
              <div className="w-full rounded-2xl shadow min-h-[100px] lg:min-h-[200px] bg-slate-900 text-white overflow-hidden p-5 flex flex-col text-left">
                <b className="text-2xl lg:text-4xl leading-2rem">900,000</b>
                People accessed care they wouldn{`'`}t have otherwise.*
              </div>
              <div className="w-full p-6 py-[2rem] flex flex-col gap-3 rounded-2xl shadow h-[200px] lg:h-full overflow-hidden">
                <span className="text-sm text-left">
                  76% of people with depression <span className="text-sky-700">feel better</span>
                  after their third visit with their therapist.
                </span>
                <div className="lg:flex md:hidden flex-1 rounded-xl overflow-hidden">
                  <img src="https://www.futuretravelexperience.com/wp-content/uploads/2016/08/Seatfrog_iPhone_1.jpg.jpg" alt="" className="size-full object-cover" />
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Covered Hospitals in Gambia ....... */}
      <section className="w-full py-[4rem] flex flex-col items-center">
        <div className="w-full max-w-[1200px] min-h-[400px] bg-black text-white rounded-3xl overflow-hidden flex flex-col md:flex-row items-center gap-8 md:gap-[2rem] border p-6 md:p-10">
          <div className="w-full md:w-[40%] flex justify-center items-center mb-6 md:mb-0">
            <Image src={gambiaBlack} alt="gambiablack" className="object-contain w-[200px] md:w-full" />
          </div>
          <div className="flex-1 flex flex-col gap-3">
            <b className="text-[2rem] md:text-[2.5rem] font-extrabold">12+ Gambian Hospitals Covered!</b>
            <p className="w-full md:w-[80%] text-base md:text-lg">
              Our groundbreaking healthcare network spans over 12 hospitals across The Gambia, ensuring that no matter where you are, the most advanced care is always within reach.
            </p>
            <Button
              variant={'outline'}
              className="px-6 md:px-[2rem] w-fit h-12 rounded-[3rem] mt-2 text-black transition-all duration-500 border-black border-2 group flex items-center gap-2"
            >
              <div className="size-[0.4rem] bg-black rounded-full animate-ping transition-all duration-300" />
              Explore Our Network
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials ..... */}
      <section className="w-full py-[4rem] gap-[3rem] flex flex-col items-center">
        <div className="flex flex-col items-center gap-1">
          <b className="text-purple-800">TESTIMONIALS</b>
          <span className="text-[2rem] md:text-[3rem] leading-[2.5rem] md:leading-[3rem] font-bold text-center">
            The <span className="text-purple-600">Stories</span> We Love to Hear
          </span>
        </div>
        <div className="w-full max-w-[1200px] flex flex-col gap-5 items-center ">
          <aside className="w-full rounded-[2rem] md:rounded-[3rem] gap-6 md:gap-10 flex flex-col md:flex-row items-center h-auto md:h-[450px] bg-gray-50 p-4 md:p-0">
            <div
              className={`w-full md:min-w-[600px] h-[220px] md:h-full bg-primary relative overflow-hidden rounded-2xl md:rounded-4xl transition-all duration-700 ease-in-out`}
              style={{
                clipPath: playTestimonial
                  ? "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"
                  : "polygon(0 0, 100% 0, 70% 100%, 0% 100%)",
              }}
            >
              <iframe
                onClick={() => {
                  const play = document.getElementById('play-testimonial') as HTMLButtonElement;
                  play?.click();
                }}
                className="size-full object-cover"
                src="https://www.youtube.com/embed/HVF0273iHus"
                title="Compassion, dignity and respect in health care"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              />
              <button
                id="play-testimonial"
                onClick={() => setPlayTestimonial(!playTestimonial)}
                className="rounded-xl px-4 h-10 flex items-center gap-2 bg-gradient-to-br from-pink-600 via-indigo-500 to-purple-700 text-white absolute bottom-4 left-4 transition-all duration-300"
              >
                <i className={`fa ${playTestimonial ? "fa-pause" : "fa-play"}`}></i>
                {playTestimonial ? `Pause` : `Play`}
              </button>
            </div>

            <div className="flex flex-col gap-4 w-full md:w-auto"></div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <div className="size-12 rounded-full bg-gradient-to-br from-pink-600 via-indigo-500 to-purple-700 overflow-hidden">
                  <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="" className="size-full object-cover" />
                </div>
                <div className="flex flex-col">
                  <b className="text-lg leading-5">John Doe</b>
                  <small className="text-gray-500">CEO, Company</small>
                </div>
              </div>
              <div className="min-h-[100px] pr-4">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, voluptates natus! Molestias, facilis repellendus. Sint deserunt quas blanditiis, aspernatur sequi, eligendi accusantium, possimus laborum maxime omnis ex provident quasi beatae.</p>
              </div>

            </div>
          </aside>
          <aside className="flex gap-4 overflow-x-auto w-full md:justify-center">
            {[1, 2, 3, 4, 5, 6].map((user, idx) => <div key={`testimonial - ${idx}`} onClick={() => setActiveTestimonial(idx)} className="flex cursor-pointer items-center justify-center relative">
              {activeTestimonial === idx && <div className="absolute size-5 bg-gradient-to-br from-pink-600 via-indigo-500 to-purple-700 rounded-full animate-ping" />}
              <div className={`${idx === activeTestimonial ? `size-16 p-1` : `size-14 hover:p-1 p-0`} overflow-hidden bg-gradient-to-br transition-all duration-300 rounded-full from-pink-600 via-indigo-500 to-purple-700`}>
                <div className="size-full rounded-full bg-white flex items-center justify-center border border-gray-500">
                  <i className="fa fa-user text-gray-300"></i>
                </div>
              </div>
            </div>)}
          </aside>
        </div>
      </section>

      {/* Awards and Sponsors */}
      <section className="w-full py-[5rem] gap-[4rem] flex flex-col items-center bg-gray-50">
        <div className="flex flex-col items-center gap-1">
          <b className="text-purple-800">FEATURED BRANDS</b>
          <b className="text-[2rem] md:text-[3rem] leading-[2.5rem] md:leading-[3rem]">Our Sponsors</b>
        </div>
        <div className="w-full max-w-[1200px] flex justify-center flex-wrap gap-6 md:gap-10 px-4">
          <img src="https://w1.pngwing.com/pngs/706/638/png-transparent-pepsico-logo-rock-on-tv-television-sponsor-microsoft-azure-exhibition-pepsi-bottling-group-text-thumbnail.png" alt="" className="w-16 h-16 md:w-24 md:h-24 rounded-2xl object-cover border shadow" />
          <img src="https://lh3.googleusercontent.com/proxy/pQ4T3_D5boL5SICny-b4WeJVI8OF9kJC0FEclPpP0Wd0GnKXZP7JbgrYw_IiQdwjf4ygWP5xL4CzFj3T" alt="" className="w-16 h-16 md:w-24 md:h-24 rounded-2xl object-cover border shadow" />
          <img src="https://cdn1.sportngin.com/attachments/photo/1878/8507/UNDER-ARMOUR-LOGO2_large.png" alt="" className="w-16 h-16 md:w-24 md:h-24 rounded-2xl object-cover border shadow" />
          <img src="https://img.freepik.com/free-vector/friends-logo-template_23-2149505594.jpg?semt=ais_hybrid&w=740" alt="" className="w-16 h-16 md:w-24 md:h-24 rounded-2xl object-cover border shadow" />
          <img src="https://img.freepik.com/premium-vector/letter-v-movie-logo_327835-962.jpg" alt="" className="w-16 h-16 md:w-24 md:h-24 rounded-2xl object-cover border shadow" />
          <img src="https://img.freepik.com/premium-vector/sm-letter-logo-design_688606-10.jpg" alt="" className="w-16 h-16 md:w-24 md:h-24 rounded-2xl object-cover border shadow" />
          <img src="https://img.freepik.com/premium-vector/initial-wf-letter-logo-design-template-vector-illustration_718265-647.jpg" alt="" className="w-16 h-16 md:w-24 md:h-24 rounded-2xl object-cover border shadow" />
        </div>
      </section>

      {/* Present Mobile App ......... */}
      <section className="w-full flex flex-col items-center py-[5rem] px-4">
        <div className="flex flex-col gap-3 items-center">
          <b className="text-[2rem] md:text-[3rem] leading-[2rem] text-center">Ricia Care Mobile App</b>
          <p className="text-base md:text-lg w-full max-w-xl text-center text-gray-600">
            Experience healthcare at your fingertips with our easy-to-use mobile app.
          </p>
        </div>
        <div className="relative flex items-center justify-center w-full max-w-2xl md:max-w-4xl my-8">
          <div className="absolute w-[75%] h-[75%] bottom-0 bg-gradient-to-br from-blue-300 to-purple-300 rounded-full blur-3xl" />
          <Image src={mobilePresent} alt="mobile app promotion" className="w-full max-w-[30rem] md:max-w-[40rem] z-10" />
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-5 mt-4">
          <a href="">
            <Image src={AppleAppBadge} alt="Apple App Store" className="w-[9rem] sm:w-[9rem]" />
          </a>
          <a href="">
            <Image src={GoogleAppBadge} alt="Google Play Store" className="w-[9rem] sm:w-[10rem]" />
          </a>
        </div>
      </section>
    </div>
  </main>
}
