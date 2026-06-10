import React from "react";
import { chronicles } from "../../../data/chronicles";
import { ChronicleReader } from "../ChronicleReader";

export function BlinkitPage() {
    const chronicle = chronicles.find(c => c.id === 'blinkit');
    if (!chronicle) return <div>Chronicle not found</div>;

    return (
        <div className="w-full h-full">
            <ChronicleReader />
        </div>
    );
}