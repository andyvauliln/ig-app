"use client"
import { ReactNode, useEffect } from "react";
import { initSatellite } from "@junobuild/core-peer";

export const ICPProvider = ({ children }: { children?: ReactNode }) => {
    useEffect(() => {
        // if (process.env.NEXT_PUBLIC_IS_ONCHAIN === 'true') {
        (async () =>
            await initSatellite({
                satelliteId: process.env.NEXT_PUBLIC_SATTELITE_ID,
                workers: {
                    auth: true
                }
            }))();
        // }
    }, []);
    return <>{children}</>
}
