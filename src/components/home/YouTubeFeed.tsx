"use client";

import { motion } from "motion/react";
import { Youtube, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect } from "react";

const YouTubeFeed = () => {
    useEffect(() => {
        // Load SociableKit YouTube widget script
        const script = document.createElement("script");
        script.src = "https://widgets.sociablekit.com/youtube-channel-videos/widget.js";
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);

        return () => {
            // Cleanup if needed, though SociableKit scripts usually persist
            if (document.body.contains(script)) {
                try {
                    document.body.removeChild(script);
                } catch (e) {
                    console.error("Error removing script:", e);
                }
            }
        };
    }, []);

    return (
        <section className="py-24 bg-muted/30 relative overflow-hidden">
            <div className="container px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center text-center space-y-4 mb-16"
                >
                    <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-gradient-to-br from-red-500/10 to-red-600/10 mb-2">
                        <Youtube className="h-8 w-8 text-red-600" />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                        Watch our videos
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl">
                        Explore our architectural journeys, study tours, and educational content. Subscribe to stay updated with our latest adventures.
                    </p>
                    <Button
                        asChild
                        variant="outline"
                        className="mt-4 rounded-full border-red-200 hover:bg-red-50 hover:text-red-600 hover:border-red-300 transition-all duration-300"
                    >
                        <Link href="https://www.youtube.com/@BackpacksandBlueprints" target="_blank" rel="noopener noreferrer">
                            @BackpacksandBlueprints <ExternalLink className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </motion.div>

                {/* YouTube Feed Widget */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="max-w-6xl mx-auto"
                >
                    {/* Custom styling for SociableKit widget to look nicer */}
                    <style jsx global>{`
                        .sk-ww-youtube-channel-videos {
                            font-family: inherit !important;
                        }
                        
                        .sk-ww-youtube-channel-videos iframe {
                            border-radius: 12px !important;
                            box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1) !important;
                            transition: all 0.3s ease !important;
                        }
                        
                        .sk-ww-youtube-channel-videos iframe:hover {
                            transform: scale(1.01) !important;
                            box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1) !important;
                        }
                    `}</style>

                    <div
                        className="sk-ww-youtube-channel-videos rounded-xl"
                        data-embed-id="25645625"
                    ></div>
                </motion.div>

                <div className="text-center mt-12">
                    <p className="text-sm text-muted-foreground mb-4">
                        Want to see more?
                    </p>
                    <Button asChild className="group">
                        <Link href="https://www.youtube.com/@BackpacksandBlueprints" target="_blank" rel="noopener noreferrer">
                            Visit our Channel <ExternalLink className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default YouTubeFeed;
