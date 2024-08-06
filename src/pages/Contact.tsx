import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { LoaderCircle } from "lucide-react";
import { toast } from "sonner";

import contact from "../assets/contact.png";

function Contact() {
  const [loading, setLoading] = useState<boolean>(false);
  const formSchema = z.object({
    name: z
      .string()
      .min(3, { message: "Your name must be atleast 3 characters long." })
      .max(32, { message: "Your name cannot exceed 32 characters." }),
    email: z
      .string()
      .email({ message: "Please provide a valid email address." }),
    mobileNumber: z.string().regex(/^[0-9]{10}$/, {
      message: "Please provide a valid 10-digit mobile number.",
    }),
    message: z
      .string()
      .min(2, { message: "Message must be at least 2 characters long." })
      .max(2000, { message: "Message cannot exceed 2000 characters." }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      mobileNumber: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setLoading(true);
      const data = JSON.stringify({
        access_key: "3fce5aaa-52b9-48b5-8cc1-117fefceaee4",
        name: values.name,
        email: values.email,
        mobile_number: values.mobileNumber,
        message: values.message,
      });
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: data,
      });
      const result = await response.json();
      if (result.success) {
        toast("Your message has been sent successfully!");
      } else {
        throw new Error(
          "There was an error sending your message. Please try again."
        );
      }
    } catch (error) {
      toast("There was an error sending your message. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="  mt-36 pb-16 w-11/12 max-w-7xl mx-auto ">
      <div className=" flex flex-col items-center mx-auto  gap-y-6">
        <div className="flex items-center gap-x-3 mx-auto ">
          <img src={contact} className="w-12" />
          <div className="text-3xl sm:text-4xl font-bold text-center tracking-wider bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500 dark:bg-gradient-to-l dark:from-blue-300 dark:to-teal-200 text-transparent">
            Contact me
          </div>
        </div>
        <div className="w-full sm:w-10/12 md:w-3/4 lg:w-1/2 max-w-3xl text-center text-muted-foreground text-lg ">
          🌟 Get in touch! 🌟 Whether you have a question or are looking for
          internships, full-time roles, or freelance projects, I'm open to new
          opportunities! 🚀💼 Don't hesitate to reach out – I look forward to
          hearing from you! 📩👍
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className=" w-full sm:w-10/12 md:w-3/4 lg:w-1/2 max-w-3xl  flex flex-col gap-y-3   "
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Enter your name"
                      {...field}
                      className="border-[#09090b] dark:border-white"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Enter your email"
                      {...field}
                      className="border-[#09090b] dark:border-white"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="mobileNumber"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Enter your mobile number"
                      {...field}
                      className="border-[#09090b] dark:border-white"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      placeholder="Enter your message"
                      {...field}
                      className="border-[#09090b] dark:border-white"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={loading}>
              {loading ? (
                <div className="flex items-center gap-x-2 ">
                  <LoaderCircle className="animate-spin " size={16} />
                  <div className="">Sending</div>
                </div>
              ) : (
                <div>Send</div>
              )}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}

export default Contact;
