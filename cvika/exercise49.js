/* Filter Exercise
validUserNames(['mark', 'staceysmom1978', 'q29832128238983', 'carrie98', 'MoanaFan']);
// => ["mark", "carrie98", "MoanaFan"] */

/* function validUserNames(usernames) {
    usernames.filter((value)) => value.length < 10)
} */

const validUserNames = (usernames) => (usernames.filter((value) => value.length < 10));
