// useInfiniteQuery
// useInfiniteQuery-ը TanStack Query (React Query)-ի hook-երից ա,
// որը օգտագործվում ա էջավորված (paginated) կամ անսահման (infinite scroll) տվյալների բեռնում կազմակերպելու համար։
// Եթե ունես API, որը վերադարձնում ա տվյալներ էջերով (օր․՝ movies list, products list), 
// useInfiniteQuery-ն օգնում ա հեշտ բեռնել հաջորդ էջերը առանց ձեռքով լոգիկա գրելու։


// useInfiniteQuery-ն կրկին ստանումա օբյկտ => {
// queryKey → cache-ի key, նույն ձև ինչպես useQuery-ի դեպքում։
// queryFn → ֆունկցիա, որը request ա անում։ Այն ստանում ա pageParam argument meta օբյկտ-ի մեջ, որը ցույցա տալիս թե որ էջը բեռնել։
// initialPageParam -> սրան փոխանցումենք այն էջը որից պետք է սկսել => 
///initialPageParam-ի արժեքը գնում մտնում է queryFn → ֆունկցի meta argumen-տի մեջ որպես pageParam պրոպ
// getNextPageParam => սա ստանումա ֆունկցիա 2 արգումենտով 
// getNextPageParam : (result) => result-ը getTodos-ի return արած արժեքնա (next-ը API-ցս գալիս)
// select : նպատակը ստացած data–ն փոխելն է մինչև այն component–իդ հասնելը
// (երբ մենք փոխումենք data-ն select-ով այն, հենց այդ փոխված data-նե վերադարձնում useInfiniteQuery-ին)
// select : result => result.pages.map((page) => page.data).flat()
// }


// useInfiniteQuery-ն return է անում օբյկտ => {
// data => ...
// Ամենակարևորներից data-ն դառնումա միշտ օբյեկտ 2 Պռոպով {
//   pageParams : [page, page1...]
//   pageParams => ամեն հերդական էջը push-ա արվում այս զանգվածի մեջ
//   pages : զանգվածա որի մեջ մտնում է ամեն անգամ getTodos-ի return արած արժեքը
//   pages : [{getTodos-ի return արած արժեքը}..., ...]
//   և քանի որ մեզ մոտ ներկարուցված զանգվածա pages-ը, մենք օգտագործումենք 
//   select-ը useInfiniteQuery-ի պարամետրներից
// } 
//
// fetchNextPage => այս ֆունկցիան է request- անում նոր էջը
// hasNextPage => useInfiniteQuery-ից եկող boolean value ա, որը ցույց ա տալիս՝ կա՞ արդյոք նոր էջ բեռնելու հնարավորություն, թե ոչ։
// Եթե վերադարձնում ես ինչ-որ արժեք (օր.՝ թիվ, id, կամ string) →
// => hasNextPage = true
// Եթե վերադարձնում ես undefined կամ null →
// => hasNextPage = false
// isFetchingNextPage => true/false սա կլինի true երբ մենք բեռնում ենք
//}


//useInfiniteQuery-ի return արած data-ն {
//   pages: [ ... ],        // Էջերի զանգված (ամեն էջի արդյունքը)
//   pageParams: [ ... ]    // Էջերի պարամետրերի զանգված
// }