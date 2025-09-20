// import { Link, useNavigate, useSearchParams } from 'react-router-dom';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { useForm } from 'react-hook-form';
// import { z } from 'zod';
// import { Button } from '@/components/ui/button';
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from '@/components/ui/card';
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from '@/components/ui/form';
// import { Input } from '@/components/ui/input';
// import Logo from '@/components/logo';
// // import GoogleOauthButton from '@/components/auth/google-oauth-button';
// import { useMutation } from '@tanstack/react-query';
// import { registerMutationFn } from '@/lib/api';
// import { toast } from '@/hooks/use-toast';
// import { Loader } from 'lucide-react';

// const SignUp = () => {
//   const navigate = useNavigate();
//   const { mutate, isPending } = useMutation({ mutationFn: registerMutationFn });
//   const [searchParams] = useSearchParams();
//   const returnUrl = searchParams.get('returnUrl');
//   const formSchema = z.object({
//     name: z.string().trim().min(1, {
//       message: 'Name is required',
//     }),
//     email: z.string().trim().email('Invalid email address').min(1, {
//       message: 'Workspace name is required',
//     }),
//     password: z.string().trim().min(1, {
//       message: 'Password is required',
//     }),
//   });

//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       name: '',
//       email: '',
//       password: '',
//     },
//   });

//   const onSubmit = (values: z.infer<typeof formSchema>) => {
//     if (isPending) return;
//     mutate(values, {
//       onSuccess: () => {
//         const decodeUrl = returnUrl ? decodeURIComponent(returnUrl) : null;
//         navigate(decodeUrl || '/');
//       },
//       onError: (error) => {
//         toast({
//           title: 'Error',
//           description: error.message,
//           variant: 'destructive',
//         });
//       },
//     });
//   };

//   return (
//     <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
//       <div className="flex w-full max-w-sm flex-col gap-6">
//         <Link to="/" className="flex items-center gap-2 self-center font-medium">
//           <Logo />
//           Monkey
//         </Link>
//         <div className="flex flex-col gap-6">
//           <Card>
//             <CardHeader className="text-center">
//               <CardTitle className="text-xl">Create an account</CardTitle>
//               <CardDescription>Signup with your Email or Google account</CardDescription>
//             </CardHeader>
//             <CardContent>
//               <Form {...form}>
//                 <form onSubmit={form.handleSubmit(onSubmit)}>
//                   <div className="grid gap-6">
//                     <div className="flex flex-col gap-4">
                     
//                     </div>
//                     <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
//                       <span className="relative z-10 bg-background px-2 text-muted-foreground">
//                         Or continue with
//                       </span>
//                     </div>
//                     <div className="grid gap-2">
//                       <div className="grid gap-2">
//                         <FormField
//                           control={form.control}
//                           name="name"
//                           render={({ field }) => (
//                             <FormItem>
//                               <FormLabel className="dark:text-[#f1f7feb5] text-sm">
//                                 Name
//                               </FormLabel>
//                               <FormControl>
//                                 <Input
//                                   placeholder="Joh Doe"
//                                   className="!h-[48px]"
//                                   {...field}
//                                 />
//                               </FormControl>
//                               <FormMessage />
//                             </FormItem>
//                           )}
//                         />
//                       </div>
//                       <div className="grid gap-2">
//                         <FormField
//                           control={form.control}
//                           name="email"
//                           render={({ field }) => (
//                             <FormItem>
//                               <FormLabel className="dark:text-[#f1f7feb5] text-sm">
//                                 Email
//                               </FormLabel>
//                               <FormControl>
//                                 <Input
//                                   placeholder="m@example.com"
//                                   className="!h-[48px]"
//                                   {...field}
//                                 />
//                               </FormControl>

//                               <FormMessage />
//                             </FormItem>
//                           )}
//                         />
//                       </div>
//                       <div className="grid gap-2">
//                         <FormField
//                           control={form.control}
//                           name="password"
//                           render={({ field }) => (
//                             <FormItem>
//                               <FormLabel className="dark:text-[#f1f7feb5] text-sm">
//                                 Password
//                               </FormLabel>
//                               <FormControl>
//                                 <Input type="password" className="!h-[48px]" {...field} />
//                               </FormControl>

//                               <FormMessage />
//                             </FormItem>
//                           )}
//                         />
//                       </div>
//                       <Button disabled={isPending} type="submit" className="w-full">
//                         {isPending && <Loader className="animate-spin" />}
//                         Sign up
//                       </Button>
//                     </div>
//                     <div className="text-center text-sm">
//                       Already have an account?{' '}
//                       <Link to="/" className="underline underline-offset-4">
//                         Sign in
//                       </Link>
//                     </div>
//                   </div>
//                 </form>
//               </Form>
//             </CardContent>
//           </Card>
//           <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-primary  ">
//             By clicking continue, you agree to our <a href="#">Terms of Service</a> and{' '}
//             <a href="#">Privacy Policy</a>.
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUp;

import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import Logo from '@/components/logo';
import { useMutation } from '@tanstack/react-query';
import { registerMutationFn } from '@/lib/api';
import { toast } from '@/hooks/use-toast';
import { Loader } from 'lucide-react';

const SignUp = () => {
  const navigate = useNavigate();
  const { mutate, isPending } = useMutation({ mutationFn: registerMutationFn });
  const [searchParams] = useSearchParams();
  const returnUrl = searchParams.get('returnUrl');
  const formSchema = z.object({
    name: z.string().trim().min(1, {
      message: 'Name is required',
    }),
    email: z.string().trim().email('Invalid email address').min(1, {
      message: 'Email is required',
    }),
    password: z.string().trim().min(1, {
      message: 'Password is required',
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    if (isPending) return;
    mutate(values, {
      onSuccess: () => {
        const decodeUrl = returnUrl ? decodeURIComponent(returnUrl) : null;
        navigate(decodeUrl || '/');
      },
      onError: (error) => {
        toast({
          title: 'Error',
          description: error.message,
          variant: 'destructive',
        });
      },
    });
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100 p-6">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-blue-200/20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-indigo-200/20 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-blue-100/30 blur-3xl"></div>
      </div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute h-2 w-2 rounded-full bg-blue-300/40 animate-bounce`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 w-full max-w-md">
        {/* Logo and Brand */}
        <div className="mb-8 text-center">
          <Link 
            to="/" 
            className="inline-flex items-center gap-3 rounded-xl bg-white/80 backdrop-blur-sm px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 shadow-md">
              <Logo />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Technolution
            </span>
          </Link>
        </div>

        {/* Main Card */}
        <Card className="border-0 bg-white/95 backdrop-blur-sm shadow-2xl ring-1 ring-blue-100/50">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-3xl font-bold text-gray-800 mb-2">
              Create an account
            </CardTitle>
            <CardDescription className="text-gray-600 text-lg">
              Sign up to start managing your projects
            </CardDescription>
          </CardHeader>
          
          <CardContent className="pt-0">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {/* Name Field */}
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel className="text-sm font-semibold text-gray-700">
                        Full Name
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            placeholder="John Doe"
                            className="h-12 border-2 border-blue-100 bg-blue-50/50 px-4 text-gray-800 placeholder:text-gray-500 focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                            {...field}
                          />
                          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                            <div className="h-2 w-2 rounded-full bg-blue-300"></div>
                          </div>
                        </div>
                      </FormControl>
                      <FormMessage className="text-red-500 text-sm" />
                    </FormItem>
                  )}
                />

                {/* Email Field */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel className="text-sm font-semibold text-gray-700">
                        Email Address
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            placeholder="Enter your email"
                            className="h-12 border-2 border-blue-100 bg-blue-50/50 px-4 text-gray-800 placeholder:text-gray-500 focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                            {...field}
                          />
                          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                            <div className="h-2 w-2 rounded-full bg-blue-300"></div>
                          </div>
                        </div>
                      </FormControl>
                      <FormMessage className="text-red-500 text-sm" />
                    </FormItem>
                  )}
                />

                {/* Password Field */}
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel className="text-sm font-semibold text-gray-700">
                        Password
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            type="password"
                            placeholder="Create a password"
                            className="h-12 border-2 border-blue-100 bg-blue-50/50 px-4 text-gray-800 placeholder:text-gray-500 focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                            {...field}
                          />
                          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                            <div className="h-2 w-2 rounded-full bg-blue-300"></div>
                          </div>
                        </div>
                      </FormControl>
                      <FormMessage className="text-red-500 text-sm" />
                    </FormItem>
                  )}
                />

                {/* Submit Button */}
                <Button
                  disabled={isPending}
                  type="submit"
                  className="w-full h-12 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:transform-none"
                >
                  {isPending && <Loader className="animate-spin mr-2 h-4 w-4" />}
                  {isPending ? 'Creating account...' : 'Create Account'}
                </Button>

                {/* Divider */}
                <div className="relative my-8">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-blue-200" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="bg-white px-4 text-gray-500 font-medium">
                      Already have an account?
                    </span>
                  </div>
                </div>

                {/* Sign In Link */}
                <div className="text-center">
                  <Link
                    to="/"
                    className="inline-flex items-center justify-center w-full h-12 border-2 border-blue-200 bg-blue-50 text-blue-700 font-semibold rounded-lg hover:bg-blue-100 hover:border-blue-300 transition-all duration-300 hover:scale-[1.02]"
                  >
                    Sign In
                  </Link>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>

        {/* Terms and Privacy */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600 leading-relaxed">
            By continuing, you agree to our{' '}
            <Link to="/terms" className="text-blue-600 hover:text-blue-800 underline underline-offset-2 transition-colors">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link to="/privacy" className="text-blue-600 hover:text-blue-800 underline underline-offset-2 transition-colors">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
