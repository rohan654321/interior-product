"use client";

const clients = [
    "EMAAR",
    "MERAAS",
    "NAKHEEL",
    "DAMAC",
    "OMNIYAT",
    "SOBHA",
    "DUBAI HOLDING",
    "ELLINGTON",
];

export default function ClientMarquee() {
    return (
        <section className="overflow-hidden border-y border-gray-200 bg-white py-14">
            <div className="flex whitespace-nowrap animate-marquee">

                {[...clients, ...clients].map((client, index) => (
                    <div
                        key={index}
                        className="mx-16 text-5xl md:text-6xl font-serif text-gray-300 hover:text-black transition-colors duration-300"
                    >
                        {client}
                    </div>
                ))}

            </div>
        </section>
    );
}