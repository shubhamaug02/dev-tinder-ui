import React from 'react'

const UserCard = ({ user }) => {
    const { firstName, lastName, about, age, gender, skills, imageUrl } = user
    return (
        <div className='flex justify-center my-5'>
            <div className="card bg-base-300 w-96 shadow-sm">
                <figure className="px-10 pt-10">
                    <img
                        src={imageUrl}
                        alt="User Image"
                        className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{firstName}</h2>
                    <p>{age && gender && (age + ", " + gender)}</p>
                    <p>{about}</p>
                    <div className="card-actions my-4 flex justify-end">
                        <button className="btn btn-primary">Ignore</button>
                        <button className="btn btn-secondary">Interested</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserCard