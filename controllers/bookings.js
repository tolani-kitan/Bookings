

const ErrorResponse = require('../utilis/errorResponse');
const asyncHandler = require('../middleware/async');
const Booking = require('../models/bookings');
const User = require('../models/users');
const Room = require('../models/rooms');
const errorHandler = require('../middleware/error');

// @desc    Get all bookings
// @route   GET/api/bookings
// @access  Public

exports.getBookings = asyncHandler(async (req, res, next) => {
        const bookings = await Booking.find();

        res.status(200).json({ 
            success: true, 
            count: bookings.length,
            data: bookings
        }) 
});


// @desc    Get User booking
// @route   GET/api/:userId/bookings
// @access  Private
exports.getBooking = asyncHandler(async (req, res, next) => {
        const user = res.locals.user;
            Booking
                .where({user})
                .populate('rooms')
                .exec(function(err, foundBookings) {

                if (err) {
                    return res.status(422).send({errors: errorHandler(err.errors)});
                }
                return res.json(foundBookings);
                });


        // if (!booking) {
        //     return next(
        //         new ErrorResponse(`Booking not found with id of ${req.params.id}`, 404)
        //     );
        // }

        // res.status(200).json({ 
        //     success: true, 
        //     data: booking
        // })
});

const isValidBooking = (proposedBooking, room) => {
    let isValid = true;
    if (room.bookings && room.bookings.length > 0) {

        isValid = rental.bookings.every((booking) => {
            const proposedStart = moment(proposedBooking.startTime);
            const proposedEnd = moment(proposedBooking.endTime);

            const actualStart = moment(booking.startTime);
            const actualEnd = moment(booking.endTime);

            return ((actualStart < proposedStart && actualEnd < proposedEnd) || (proposedEnd < actualEnd && proposedEnd < actualStart));
        });  
    }

    return isValid;
}

// @desc    Create new booking
// @route   POST /api/:userId/bookings
// @access  Private
// exports.createBooking = asyncHandler(async (req, res, next) => {
//     const {startTime, endTime, bookedDate} = req.body
//     const newBooking = new Booking({
//         user: req.user.id,
//         // room: req.room.id
//     });
//     const booking = await newBooking.find();
//     res.json(booking);
// });



exports.createBooking = asyncHandler(async (req, res, next) => {
    const {startTime, endTime, bookedDate, room} = req.body;
    const user = res.locals.user;
    // console.log(user);
    const booking = new Booking({
        startTime,
        endTime,
        bookedDate,
        // user: req.user.id,
        // room: req.room.id
    });

    Room.findById(room._id)
        .populate('bookings')
        .populate('user')
        .exec(function(err, foundRoom) {

        
        if (err) {
            return res.status(422).send({errors: errorHandler(err.errors)});
        }

        if (foundRoom.user.id === user.id) {
            return res.status(422).send({errors: [{title: 'Invalid User!', detail: 'Cannot create booking'}]});
        }

        if (isValidBooking(booking, foundRoom)) {
            booking.user = user;
            booking.room = foundRoom;
            foundRoom.bookings.push(booking);

            booking.save(function(err) {
                if (err) {
                    return res.status(422).send({errors: errorHandler(err.errors)});
                }

                foundRoom.save()
                User.update({_id: user.id}, {$push: {bookings: booking}}, function(){});
                return res.json({startTime: booking.startTime, endTime: booking.endTime});
            });
            } else {
                return res.status(422).send({errors: [{title: 'Invalid Booking!', detail: 'Choosen dates are already taken!'}]});
            }
        
        })

    // const booking = await newBooking.save();
    // res.json(booking);
});

// @desc    Update booking
// @route   PUT /api/bookings/:id
// @access  Private
exports.updateBooking = asyncHandler(async (req, res, next) => {
        const booking = await Booking.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        if(!booking){
            new ErrorResponse(`Booking not found with id of ${req.params.id}`, 404)
        }

        res.status(200).json({ 
            success: true, 
            data: booking
        })
    
});

// @desc    Delete booking
// @route   DELETE /api/v1/bookings/:id
// @access  Private
exports.deleteBooking = asyncHandler(async (req, res, next) => {
        const booking = await Booking.findByIdAndDelete(req.params.id);

        if(!booking){
            new ErrorResponse(`Booking not found with id of ${req.params.id}`, 404)
        }

        res.status(200).json({ 
            success: true, 
            data: {}
        });
    
});














