import React from "react";
import { chronicles } from "../../../data/chronicles";
import { ChronicleReader } from "../ChronicleReader";

export function FlowyPage() {
    const chronicle = chronicles.find(c => c.id === 'flowy');
    if (!chronicle) return <div>Chronicle not found</div>;

    return (
        <div className="w-full h-full">
            <ChronicleReader />
        </div>
    );
}