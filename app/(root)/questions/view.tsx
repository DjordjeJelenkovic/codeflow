// "use client";

// import { toast } from "sonner";
// import { incrementViews } from "@/lib/actions/question.action";
// import { useEffect } from "react";

// const View = ({ questionId }: { questionId: string }) => {
//   const handleIncrement = async () => {
//     const result = await incrementViews({ questionId });

//     if (result.success) {
//       toast("Success!", {
//         // title: "Success",
//         description: "Views incremented.",
//       });
//     } else {
//       toast(`Error ${result?.error?.message}`, {
//         // title: `Error ${result?.status}`,
//         description: result?.error?.message,
//         // variant: "destructive",
//       });
//     }
//   };

//   useEffect(() => {
//     handleIncrement();
//   }, []);

//   return null;
// };

// export default View;
