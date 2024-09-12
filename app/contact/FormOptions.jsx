{/* This file is to store codes only */}

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";

import { Textarea } from "@/components/ui/textarea";

import { 
    Select, 
    SelectContent, 
    SelectGroup, 
    SelectItem, 
    SelectLabel, 
    SelectTrigger, 
    SelectValue } from "@/components/ui/select";

<div className="xl:w-[54%] order-1 xl:order-none">
    <form className="flex flex-col gap-6 p-10 bg-[#18181c] rounded-xl">
        <h3 className="text-4xl text-accent">Let's work together!</h3>
        <p className="text-primarytext/60">Send me a message.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#18181c]">

            {/* Input */}
            <Input type="text" placeholder="Name *" />
            <Input type="text" placeholder="Company (optional)" />
            <Input type="email" placeholder="Email *" />
            <Input type="phone" placeholder="Phone (optional)" /> 

            {/*
            <input type="text" placeholder="Name" value={formData.name} onChange={handleChange} name="name" class="flex h-[48px] rounded-md border border-primarytext/10 focus:border-accent font-light bg-primary px-4 py-5 text-base placeholder:text-primarytext/60 outline-none hover:border-accent" />
            <input type="text" placeholder="Company" value={formData.company} onChange={handleChange} name="company" class="flex h-[48px] rounded-md border border-primarytext/10 focus:border-accent font-light bg-primary px-4 py-5 text-base placeholder:text-primarytext/60 outline-none hover:border-accent" />
            <input type="email" placeholder="Email" value={formData.email} onChange={handleChange} name="email" class="flex h-[48px] rounded-md border border-primarytext/10 focus:border-accent font-light bg-primary px-4 py-5 text-base placeholder:text-primarytext/60 outline-none hover:border-accent" />
            <input type="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} name="phone" class="flex h-[48px] rounded-md border border-primarytext/10 focus:border-accent font-light bg-primary px-4 py-5 text-base placeholder:text-primarytext/60 outline-none hover:border-accent" />
            */}
        </div>

        {/* select */}
        <Select name="service">
            <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a service:" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>SELECTION:</SelectLabel>
                    <SelectItem value="jo">&nbsp;&nbsp;&nbsp;&nbsp;Job opportunity</SelectItem>
                    <SelectItem value="gi">&nbsp;&nbsp;&nbsp;&nbsp;Service inquiry</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>

        {/*
        <select name="service" value={formData.service} class="flex h-[48px] rounded-md border border-primarytext/10 focus:border-accent font-light bg-primary px-4 py-0 text-base placeholder:text-primarytext/60 outline-none hover:border-accent">
            <option value="" disabled selected>Select a service</option>
            <option value="Job opportunity">
                Job opportunity
            </option>
            <option value="Service inquiry">
                Service inquiry
            </option>
        </select>
        */}

        {/* textarea */}
        <Textarea 
            className="h-[200px]" 
            placeholder="Type your message here..." 
        />

        {/* button */}
        <Button size="md" className="mx-auto h-12 w-48 text-lg hover:bg-primary hover:text-accent border border-accent hover:border-accent">
            Send message
        </Button>
        
        {status && <p className="text-center mt-4">{status}</p>}
    </form>
</div>
