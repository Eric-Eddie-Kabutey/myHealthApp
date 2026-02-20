'use client';

import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogTitle,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button';

function PreviewDoc({ open, close }: { open: boolean, close: () => void }) {
    return <Dialog open={!!open} onOpenChange={close}>
        <DialogContent className="main-content sm:w-[400px] flex flex-col items-center gap-3">
            <DialogTitle />
            <img src="https://randomuser.me/portraits/men/10.jpg" alt="" className="w-full object-cover" />
        </DialogContent>
    </Dialog>
}

export default PreviewDoc